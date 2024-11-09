import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import ChatHistory from './ChatHistory';
import MessageInput from './MessageInput';
import './ChatScreen.css';

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  return (
    <div className="chat-container">
      <Sidebar />
      <div className="chat-main">
        <ChatHeader />
        <ChatHistory />
        <ChatBox messages={messages} />
      <MessageInput setMessages={setMessages} />
      </div>
    </div>
  );
}

export default ChatScreen;
