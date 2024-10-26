import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import About from './components/about.js';
import Values from './components/values.js';
import Services from './components/services.js';
import Events from './components/events.js';
import Clients from './components/clients.js';
import Partners from './components/partners.js';
import ContactUs from './components/contact_us.js';
import Footer from './components/footer.js';
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
      <Partners/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
