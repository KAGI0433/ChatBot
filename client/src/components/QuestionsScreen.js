import React from 'react';
import '../App.css';
import Shot from '../images/shot.png'
import Guy from '../images/guy.jpg'
import { MdMicNone } from "react-icons/md";
import { SlCursor } from "react-icons/sl";

export const NoQuestionsScreen = () => (
  <div className="main-content">
    <h3>Get answers in seconds</h3>
    <p>Create and complete tasks using boards</p>
    <div className="history-box">
        <h3>Search History</h3>
        <div className="no-questions">
          <img src={ Shot } alt="No questions"  style={{ width: '200px', height: 'auto' }}/>
          <p>No Questions added</p>
          <span>Type your questions to below input and get fast answers</span>
        </div>
      </div>
    
  </div>
);

export const QuestionsScreen = () => (
  <div className="main-content">
    <h3>Get answers in seconds</h3>
    <p>Create and complete tasks using boards</p>
    <div className="search-history">
        <div className="search-header">
      <h4>Search History</h4>
      <button className="clear-history-button">
            Clear Chat History
          </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
  <div className="item">
    <img src={Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
    <div>
      <p>How to design SaaS web application UI</p>
      <span>2 questions asked • 2 minutes ago</span>
    </div>
  </div>

  <div className="item">
    <img src={Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
    <div>
      <p>Designing SaaS UI as a developer</p>
      <span>2 questions asked • 2 minutes ago</span>
    </div>
  </div>

  <div className="item">
    <img src={Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
    <div>
      <p>Figma design tips and tricks</p>
      <span>34 questions asked • 2 minutes ago</span>
    </div>
  </div>

  <div className="item">
    <img src={Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
    <div>
      <p>List our SaaS UX testing methods and...</p>
      <span>20 questions asked • 2 minutes ago</span>
    </div>
  </div>

  <div className="item">
    <img src={Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
    <div>
      <p>Write coding for landing page with HTML...</p>
      <span>2 questions asked • 2 minutes ago</span>
    </div>
  </div>

  <div className="item">
    <img src={Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
    <div>
      <p>How to use Superpage UI?</p>
      <span>28 questions asked • 2 minutes ago</span>
    </div>
  </div>
</div>


    </div>
    <div className="chat-suggestions">
  <h4>Chat Suggestions</h4>
  <div className="button-container">
    <button>Write code for</button>
    <button>Explain more</button>
    <button>Explain more</button>
    <button>Explain more</button>
    <button>Explain more</button>
  </div>
</div>

    <div className="search-bar">
      <input type="text" placeholder="Type new questions" />
      <button className='send-button'><MdMicNone /></button>
      <button className='send-button'><SlCursor /></button>
      
    </div>
  </div>
);
