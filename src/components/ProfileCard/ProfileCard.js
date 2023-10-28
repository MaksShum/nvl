import React, { useState } from 'react';
import './ProfileCard.css'; // You can define your CSS for styling the card


const ProfileCard = () => {
  const [name, setName] = useState('John ');
  const [secondName, setSecondName] = useState('Doe');
  const [age, setAge] = useState(30);
  const [sex, setSex] = useState('male');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('aaa');
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Handle the update of profile information, e.g., send data to a server
  };

  return (
    <div className="profile-card">
      <h2>Profile</h2>
      <div className="profile-data">
        <div className="field">
          <span>Name:</span>
          {isEditing ? (
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          ) : (
            <span>{name}</span>
          )}
        </div>
        <div className="field">
          <span>Second name:</span>
          {isEditing ? (
            <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
          ) : (
            <span>{secondName}</span>
          )}
        </div>
        <div className="field">
          <span>Age:</span>
          {isEditing ? (
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          ) : (
            <span>{age}</span>
          )}
        </div>
        <div className="field">
          <span>Sex:</span>
          {isEditing ? (
            <select onChange={(e) => setSex(e.target.value)}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            
          ) : (
            <span>{sex}</span>
          )}
        </div>
        <div className="field">
          <span>Email:</span>
          {isEditing ? (
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          ) : (
            <span>{email}</span>
          )}
        </div>
        
        <div className="field">
          <span>Password:</span>
          {isEditing ? (
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          ) : (
            <span>...</span>
          )}
        </div>
      </div>
      {isEditing ? (
        <button className='but' onClick={handleSaveClick}>Save</button>
        
      ) : (
        <button className='but' onClick={handleUpdateClick}>Change</button>
      )}
      <button className='but' onClick={handleUpdateClick}>exit profile</button>
    </div>
    
  );
};

export default ProfileCard;
