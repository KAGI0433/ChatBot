import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../App.css";
import ChatHistory from "../components/chatHistory";
import Loading from "../components/Loading";
import { MdMicNone } from "react-icons/md";
import { SlCursor } from "react-icons/sl";

const ChatApp = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize Google Generative AI
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleUserInput = (e) => setUserInput(e.target.value);

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;

      setChatHistory([
        ...chatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response.text() },
      ]);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to fetch response. Please try again.");
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  const clearChat = () => setChatHistory([]);

  return (
    <div className="chat-app">
        <div className="chat-header">
        <h4>Search History</h4>
      <button className="clear-button" onClick={clearChat}>
        Clear Chat History
      </button>
        </div>

      <div className="chat-history-container">
        <ChatHistory chatHistory={chatHistory} />
        <Loading isLoading={isLoading} />
        {error && <p className="error-message">{error}</p>}
      </div>

      {/* Chat Suggestions Section */}
      <div className="chat-suggestions">
        <h4>Chat Suggestions</h4>
        <div className="button-container">
          <button onClick={() => setUserInput("Write code for")}>Write code for</button>
          <button onClick={() => setUserInput("Explain more")}>Explain more</button>
          <button onClick={() => setUserInput("Provide an example")}>Provide an example</button>
          <button onClick={() => setUserInput("Summarize this")}>Summarize this</button>
          <button onClick={() => setUserInput("What are the benefits?")}>What are the benefits?</button>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Type new questions"
          value={userInput}
          onChange={handleUserInput}
          className="chat-input"
        />
        <button className="send-button" onClick={sendMessage} disabled={isLoading}>
          <MdMicNone />
        </button>
        <button className="send-button" onClick={sendMessage} disabled={isLoading}>
          <SlCursor />
        </button>
      </div>

    </div>
  );
};

export default ChatApp;
