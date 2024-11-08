import React from 'react';
import './App.css';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Superpage</h2>
    <ul>
      <li>AI Chat</li>
      <li>Members</li>
      <li>Integrations</li>
      <li>Refer friends</li>
      <li>Pricing Plans</li>
      <li>Settings</li>
    </ul>
  </div>
);

const NoQuestionsScreen = () => (
  <div className="main-content">
    <h3>Get answers in seconds</h3>
    <p>Create and complete tasks using boards</p>
    <div className="search-history">
      <p>No Questions added</p>
      <p>Type your questions in the box below to get fast answers</p>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Write Coding about new HTML Tags" />
      <button className="send-button">Send</button>
    </div>
  </div>
);

const QuestionsScreen = () => (
  <div className="main-content">
    <h3>Get answers in seconds</h3>
    <p>Create and complete tasks using boards</p>
    <div className="search-history">
      <h4>Search History</h4>
      <ul>
        <li>How to design SaaS web application UI... <span>2 questions asked</span></li>
        <li>Designing SaaS UI as a developer <span>2 questions asked</span></li>
        <li>Figma design tips and tricks <span>34 questions asked</span></li>
        <li>List our SaaS UX testing methods and... <span>20 questions asked</span></li>
        <li>Write coding for landing page with HTML... <span>2 questions asked</span></li>
        <li>How to use Superpage UI? <span>28 questions asked</span></li>
      </ul>
      <button className="clear-button">Clear History</button>
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

const App = () => {
  const [hasQuestions, setHasQuestions] = React.useState(false);

  return (
    <div className="app">
      <Sidebar />
      {hasQuestions ? <QuestionsScreen /> : <NoQuestionsScreen />}
    </div>
  );
};

export default App;
