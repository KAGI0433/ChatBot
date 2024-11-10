// ChatHeader.js
import React from 'react';
import '../App.css';
import Guy from '../images/guy.jpg'
function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header-text">
        
        <p></p>
      </div>
      <div className="chat-user">
        <span>Johnson Doe</span>
        <img
          src= {Guy}
          alt="User Avatar"
          className="user-avatar"
        />
      </div>
    </div>
  );
}

export default ChatHeader;
