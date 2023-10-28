import NavnigationPanel from '../../NavigationPanel/NavnigationPanel';
import EventCard from '../../EventCard/EventCard'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css'

function MainPage() {


  return (
    <Container>
      <Row>
        <NavnigationPanel/>
      </Row>
      <Row>
        <button 
        className="create" 
        style={{ 
          margin: '10px auto',
          width: '50%',
          padding: '15px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        
        }}><Link to="/create" style={{color: 'white'}}>Create event</Link></button>
      </Row>
        <EventCard/>
      <Row>
        <Footer/>
      </Row>
    </Container>

  );
}

export default MainPage;