import React from 'react';

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.isUser ? 'user' : 'ai'}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
