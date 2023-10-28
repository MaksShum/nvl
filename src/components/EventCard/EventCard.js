import React, { Fragment } from 'react';
import './EventCard.css'; // You can define your CSS for styling the event card
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useState,useEffect} from 'react';

const EventCard = () => {
  const [list,setList] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/events')
 .then(res => setList(res.data))
 .catch(err => console.log(err))
  },[])  
  console.log(list)

  const getList = (list) => {
     const cards = list.map((item,i) => {
        return (
          <div className="event-card" key={i}>
            <div className="event-card-header">
                <h2>{item.name}</h2>
                <p>Date: {item.date}</p>
                <p>Time: {item.time}</p>
                <p>Location: {item.location}</p>
                <p>Price: {item.price}</p>
                <Button style={{margin: '20px'}} variant="success">OK</Button>  
                <Button style={{margin: '20px'}}variant="danger">Cancel</Button>
                <Button style={{margin: '20px'}}variant="light">Players: 1/{item.quantity}</Button>
                </div>
            <div className="event-card-description">
                <p>Description: {item.description}</p>
            </div>
        </div>
        )
        
      })
      return <ul>{cards}</ul>
  }
  const elements = getList(list)

  return (
        <Fragment>
          {elements}
        </Fragment>
    
  );
}

export default EventCard;