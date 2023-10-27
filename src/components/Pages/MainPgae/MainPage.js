import NavnigationPanel from '../../NavigationPanel/NavnigationPanel';
import EventCard from '../../EventCard/EventCard'
import Footer from '../../Footer/Footer'

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
        <EventCard/>
        <EventCard/>
      </Row>
      <Row>
        <Footer/>
      </Row>
    </Container>

  );
}

export default MainPage;