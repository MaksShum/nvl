import React, { useState } from 'react';
import './RegForm.css'; // You can define your CSS for styling the form

const RegForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isPolitical, setIsPolitical] = useState(false);

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
  const handlePoliticalChange = (e) => setIsPolitical(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an authentication API
    // You can access form fields and their values from the state
  }

  return (
    <div className="authorization-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={handleLoginChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember Me
          </label>
        </div>
        <div className="form-group">
         
            <input
              type="checkbox"
              name="political"
              value="yes"
              checked={isPolitical}
              onChange={handlePoliticalChange}
            />
            Political
         
        </div>
        <button className="button-sub" type="submit">Sign In</button>
      </form>
      <div className="forgot-password">
        <button className="button-forgot">Forgot Password</button>
      </div>
    </div>
  );
};

export default RegForm;