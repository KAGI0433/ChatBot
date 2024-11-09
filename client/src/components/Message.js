import React from 'react';
import './Message.css';

function Message({ text, isUser }) {
  return (
    <div className={`message ${isUser ? 'user-message' : 'ai-message'}`}>
      {text}
    </div>
  );
}

export default Message;
