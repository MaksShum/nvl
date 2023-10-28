import NavigationPanel from '../../NavigationPanel/NavnigationPanel'
import Footer from '../../Footer/Footer';
import ProfileCard from '../../ProfileCard/ProfileCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Profile() {
    return (
      <Container>
        <Row>
            <NavigationPanel/>
        </Row>
        <Row>
            <ProfileCard/>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
  
    );
  }
  
  export default Profile;
  