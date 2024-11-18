import React, { useState, useEffect } from "react";
import "../App.css";
import ChatHistory from "../components/chatHistory";
import Loading from "../components/Loading";
import { MdMicNone } from "react-icons/md";
import { SlCursor } from "react-icons/sl";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatApp = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize Google Generative AI
  const genAI = new GoogleGenerativeAI("AIzaSyBSlBqShZML7jwR03-Yi3rkCgNv2Qaiso0");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Fetch chat history on component mount
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await fetch("http://localhost:8081/chats");
        const data = await response.json();
        setChatHistory(
          data.map((chat) => [
            { type: "user", message: chat.user_message },
            { type: "bot", message: chat.bot_message },
          ]).flat()
        );
      } catch (err) {
        console.error("Error fetching chat history:", err);
      }
    };
    fetchChatHistory();
  }, []);

  // Handle user input change
  const handleUserInput = (e) => setUserInput(e.target.value);

  // Send message to Google Generative AI and save to backend
  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    setError(null);

    try {
      // Get AI response
      const result = await model.generateContent(userInput);
      const botResponse = await result.response.text();

      // Save chat to backend
      const response = await fetch("http://localhost:8081/chats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage: userInput,
          botMessage: botResponse,
        }),
      });
      if (!response.ok) throw new Error("Failed to save chat");

      // Update chat history
      setChatHistory([
        ...chatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: botResponse },
      ]);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to fetch response. Please try again.");
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  // Clear chat history
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

