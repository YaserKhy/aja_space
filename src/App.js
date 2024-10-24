import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Container id='about' className='d-flex flex-column w-100 mt-4 justify-content-center'>
        <p className='text-center p-0 m-0' style={{fontSize: '.8rem'}}>فضاء اجـا عن قرب</p>
        <p className='text-center pb-2' style={{fontSize: '1.7rem'}}>من نحن</p>
        <hr style={{color: 'blue', opacity: 0.2}}></hr>
        <Row className='d-flex flex-row-reverse justify-content-center'>
          <Col>
            <Image src={`${process.env.PUBLIC_URL}/aboutus1.png`} width={500}/>
          </Col>
          <Col className='py-4 ps-5'>
            <p className='text-end mb-4 aboutText'>تختص فضاء أجـا في مجال تقنية المعلومــات وتعتبــر أول مؤسسة رائدة بهذا المجال في منطقة حائل بكوادر سعودية شابة تعمل على المساهمة في تحقيق رؤية 2030 عبر اختيار أحد المجالات التــي تعتبــر في صميــم الرؤيــة لتحقيـق أهم ثلاثة أهداف على مستوى المنطقـة نحو مجتمع حيوي واقتصاد مزدهر و وطن طموح بعمل أيدي شبــاب سعودي طمـوح هدفـه الأول المساهمــة فـي تحقيــق تلك الأهــداف</p>
            <p className='text-end aboutSection'>:رؤيتنا</p>
            <p className='text-end aboutText'>أن نكون من أكبر الشركات الرائدة والتقنية في الشرق الاوسط وأن تكون متمثله بدعم رؤية وطننا ومليكنا</p>
            <p className='text-end aboutSection'>رسالتنا</p>
            <p className='text-end aboutText'>.تقديم المشاريع وفق المعايير العالميــة بأفضل جودة مع خبرات محلية ذات مهارة احترافية ورعاية المبدعــيـن والمبتكرين في إطار بيئة عمل محفزة تتــســـم بالمسؤولية المهنية والمرونة، أولويوتها أن تكون الخيار الأول لدى العميل</p>
          </Col>
        </Row>
      </Container>
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
