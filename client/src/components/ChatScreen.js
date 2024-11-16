import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import ChatBox from './ChatBox';
import MessageInput from './MessageInput';
import { NoQuestionsScreen } from './QuestionsScreen';
import ChatApp from './ChatApp'; // Import your ChatApp component
import './ChatScreen.css';

function ChatScreen() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="chat-container">
      <Sidebar />
      <div className="chat-main">
        <ChatHeader />
        
        {messages.length === 0 ? (
          <NoQuestionsScreen />
        ) : (
          <div className="chat-content">
            {/* Replace QuestionsScreen with ChatApp */}
            <ChatApp />
            <ChatBox messages={messages} />
          </div>
        )}
        
        <MessageInput setMessages={setMessages} />
      </div>
    </div>
  );
}

export default ChatScreen;
