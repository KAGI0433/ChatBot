// Sidebar.js
import React from 'react';
import '../App.css';
import { RiChat1Line } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { VscSymbolInterface } from "react-icons/vsc";
import { FaDollarSign } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Superpage</div>
      <ul className="sidebar-menu">
      <li>
        <RiChat1Line style={{ marginRight: '8px' }} />
        AI Chat
      </li>
        <li><SlPeople style={{ marginRight: '8px' }} />Members</li>
        <li><HiOutlineArrowsRightLeft style={{ marginRight: '8px' }}/>
        Integrations</li>
        <li><VscSymbolInterface style={{ marginRight: '8px' }}/>Refer friends</li>
        <li><FaDollarSign style={{ marginRight: '8px' }}/>Pricing Plans</li>
        <li><IoSettingsOutline style={{ marginRight: '8px' }}/>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
