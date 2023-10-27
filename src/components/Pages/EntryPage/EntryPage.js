import NavigationPanel from '../../NavigationPanel/NavnigationPanel'
import RegForm from '../../RegForm/RegForm'
import Footer from '../../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function EntryPage() {
    return (
      <Container>
        <Row>
            <NavigationPanel/>
        </Row>
        <RegForm/>
        <Row>
          <Footer/>
        </Row>
      </Container>
  
    );
  }
  
  export default EntryPage;
  