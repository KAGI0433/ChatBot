// Sidebar.js
import React from 'react';
import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Superpage</div>
      <ul className="sidebar-menu">
        <li>AI Chat</li>
        <li>Members</li>
        <li>Integrations</li>
        <li>Refer friends</li>
        <li>Pricing Plans</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
