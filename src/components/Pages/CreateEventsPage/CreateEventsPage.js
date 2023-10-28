import NavigationPanel from '../../NavigationPanel/NavnigationPanel'
import FormCreateEvents from '../../FormCreateEvents/FormCreateEvents'
import Footer from '../../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function EntryPage() {
    return (
      <Container>
        <Row>
            <NavigationPanel/>
        </Row>
        <FormCreateEvents/>
        <Row>
          <Footer/>
        </Row>
      </Container>
  
    );
  }
  
  export default EntryPage;