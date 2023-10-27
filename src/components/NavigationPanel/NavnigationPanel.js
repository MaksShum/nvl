import React from 'react';
import './NavnigationPanel.css'; // You can define your CSS for styling the navigation panel
import Button from 'react-bootstrap/Button';

const NavigationPanel = () => {
  return (
    <div className="navigation-panel">
      <ul>
        <li><a href="/">InGame</a></li>
        <li><a href="#">LOGO</a></li>
        <li><a href="/services">Profile</a></li>
       
      </ul>
    </div>
  );
}

export default NavigationPanel;