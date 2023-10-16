import BasicExample from './components/main';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forms from '../src/components/form'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={10}><BasicExample/></Col>
        <Col>3 of 5</Col>
      </Row>
      <Row>
        <Col>1 of 5</Col>
        <Col xs={5}><BasicExample/></Col>
        <Col><Forms/></Col>
      </Row>
    </Container>

  );
}

export default App;
