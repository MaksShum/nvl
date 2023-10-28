import NavigationPanel from '../../NavigationPanel/NavnigationPanel'
import Footer from '../../Footer/Footer';
import NewProfile from '../../NewProfile/NewProfile';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function EntryPage() {
    return (
      <Container>
        <Row>
            <NavigationPanel/>
        </Row>
        <Row>
            <NewProfile/>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
  
    );
  }
  
  export default EntryPage;
  