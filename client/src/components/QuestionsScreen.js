import React from 'react';
import '../App.css';
import Cartoon from '../images/cartoon.jpg'
import Guy from '../images/guy.jpg'

export const NoQuestionsScreen = () => (
  <div className="main-content">
    <h3>Get answers in seconds</h3>
    <p>Create and complete tasks using boards</p>
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

export const QuestionsScreen = () => (
  <div className="main-content">
    <h3>Get answers in seconds</h3>
    <p>Create and complete tasks using boards</p>
    <div className="search-history">
      <h4>Search History</h4>
      <ul>
      <li>
      <img src= {Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "8px" }}
      />
    How to design SaaS web application UI... <span>2 questions asked</span>
      </li>
        <li> <img src= {Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "8px" }}
      />Designing SaaS UI as a developer <span>2 questions asked</span></li>
        <li> <img src= {Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "8px" }}
      />Figma design tips and tricks <span>34 questions asked</span></li>
        <li> <img src= {Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "8px" }}
      />List our SaaS UX testing methods and... <span>20 questions asked</span></li>
        <li> <img src= {Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "8px" }}
      />Write coding for landing page with HTML... <span>2 questions asked</span></li>
        <li> <img src= {Guy} alt="Icon for question 1" style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "8px" }}
      />How to use Superpage UI? <span>28 questions asked</span></li>
      </ul>
      
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Type new questions" />
      <button className="send-button">Send</button>
    </div>
    <div className="chat-suggestions">
      <button>Write code for</button>
      <button>Explain more</button>
      <button>Explain more</button>
      <button>Explain more</button>
      <button>Explain more</button>
    </div>
  </div>
);
