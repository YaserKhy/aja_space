import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import About from './components/about.js';
import Values from './components/values.js';
import Services from './components/services.js';
import Events from './components/events.js';
import Clients from './components/clients.js';
import { Button, Container, Col, Row } from 'react-bootstrap';
import Initiatives from './components/initiatives/initiatives.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Values/>
      <Services/>
      <Events/>
      <Initiatives/>
      <Clients/>
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
