import React from 'react';
import './EventCard.css'; // You can define your CSS for styling the event card
import Button from 'react-bootstrap/Button';

const EventCard = (props) => {
  const { title, location,time,price, description } = props;

  return (
        <div className="event-card">
            <div className="event-card-header">
                <h2>{title}</h2>
                <p>Time: 11.11.11 19:00{time}</p>
                <p>Location: g.Kurgan,ul.Stancionnaya,44{location}</p>
                <p>Price: 100 ${price}</p>
                <Button style={{margin: '20px'}} variant="success">OK</Button>  
                <Button style={{margin: '20px'}}variant="danger">Cancel</Button>
                <Button style={{margin: '20px'}}variant="light">Players: 1/14</Button>
                </div>
            <div className="event-card-description">
                <p>Description: Payment on card,game 2 hour aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{description}</p>
            </div>
        </div>
    
  );
}

export default EventCard;