import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header.js';
import About from './components/about.js';
import { Button, Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Container>
        <Row>
          <Col>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
            <Button className='d-block'>Click</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
