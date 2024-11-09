
import React from 'react';
import '../App.css';

function ChatHistory() {
  return (
    <div className="chat-history">
      <div className="history-box">
        <h3>Search History</h3>
        <div className="no-questions">
          <img src="https://via.placeholder.com/60" alt="No questions" />
          <p>No Questions added</p>
          <span>Type your questions to below input and get fast answers</span>
        </div>
      </div>
    </div>
  );
}

export default ChatHistory;
