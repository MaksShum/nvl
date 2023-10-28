import React from 'react';
import './NavnigationPanel.css'; // You can define your CSS for styling the navigation panel
import { Link } from 'react-router-dom';

const NavigationPanel = () => {
  return (
    <div className="navigation-panel">
      <ul>
        <li><a href="/">Events</a></li>
        <li><h1>LOGO</h1></li>
        <li><Link to="/entry"> Profile</Link></li>   
      </ul>
    </div>
  );
}

export default NavigationPanel;