import React from 'react';
import '../App.css';
import Cartoon from '../images/cartoon.jpg'

function ChatHistory() {
  return (
    <div className="chat-history">
      <div className="history-box">
        <h3>Search History</h3>
        <div className="no-questions">
          <img src={Cartoon} alt="No questions"  style={{ width: '200px', height: 'auto' }}/>
          <p>No Questions added</p>
          <span>Type your questions to below input and get fast answers</span>
        </div>
      </div>
    </div>
  );
}

export default ChatHistory;
