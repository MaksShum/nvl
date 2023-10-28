import React, { useState } from 'react';
import './NewProfile.css'; // You can define your CSS for styling the form

const NewProfile = () => {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');

  const handleNameChange = (e) => setName(e.target.value);
  const handleSecondNameChange = (e) => setSecondName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send registration data to a server
    // You can access form fields and their values from the state
  }

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input className="input" type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="secondName">Second Name:</label>
          <input type="text" id="secondName" value={secondName} onChange={handleSecondNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="date" id="age" value={age} onChange={handleAgeChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Repeat password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>
        <button className="submitButton" type="submit">OK</button>
      </form>
    </div>
  );
};

export default NewProfile;