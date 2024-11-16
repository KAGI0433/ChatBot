import React from "react";

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="chat-history overflow-y-auto h-96 p-4 bg-gray-100 rounded-lg">
      {chatHistory.map((chat, index) => (
        <div
          key={index}
          className={`p-2 my-2 rounded-lg ${
            chat.type === "user"
              ? "bg-blue-100 text-blue-900 self-end"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {chat.message}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
