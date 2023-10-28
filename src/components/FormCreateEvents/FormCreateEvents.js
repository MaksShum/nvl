import React, { useState } from 'react';
import './FormCreateEvents.css'; // You can define your CSS for styling the form

const FormCreateEvents = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send event data to a server
    // You can access form fields and their values from the state
  }

  return (
    <div className="create-event-form">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="text" id="time" value={time} onChange={handleTimeChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" value={price} onChange={handlePriceChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity of Places:</label>
          <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <button className="button-create" type="submit">OK</button>
      </form>
    </div>
  );
};

export default FormCreateEvents;