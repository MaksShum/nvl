import React from 'react';
import './Footer.css'; // You can define your CSS for styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        Facebook
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Your Company Name</p>
    </footer>
  );
}

export default Footer;