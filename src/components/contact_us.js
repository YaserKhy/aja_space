import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import SectionTitle from './custom/section_title'
import ContactInfo from './custom/contact_info';
import SocialInfo from './custom/social_info';
import { faLocationDot, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';


function ContactUs() {
  return (
    <Container id='contact' className='my-3'>
      <SectionTitle title={'للتواصـل'} subTitle={'تواصل معنا'}></SectionTitle>
      <hr className='mb-5 pb-4' style={{ color: 'blue', opacity: 0.2 }}></hr>
      <Row className='d-flex flex-row-reverse'>
        <Col className='d-flex flex-column align-items-end text-end'>
          <Row><p className='text-end ps-5' style={{ fontSize: '1.1rem' }}>نسعد دوماً لخدمتكم، في حال وجود اي استفسار نرجو منكم التواصل معنا عبر خدمة البريد الالكتروني او عبر وسائل التواصل المتاحة</p></Row>
          <ContactInfo title={':العنوان'} subTitle={'حائل, الخماشية, مقر بنك التمنية الاجتماعية (جادة 30)'} icon={faLocationDot}/>
          <ContactInfo title={':الجوال'} subTitle={'0508611575'} icon={faPhone}/>
          <ContactInfo title={':البريد الإلكتروني'} subTitle={'Info@ajaspace.sa'} icon={faMailBulk}/>
          <SocialInfo/>
        </Col>
        <Col>
          <Form className='p-3 text-end' style={{backgroundColor:'white', borderRadius: '20px'}}>
            <Form.Group className='mb-3' controlId='formName'>
              <Form.Label style={{color:'black'}}>الاسم</Form.Label>
              <Form.Control className='text-end' type="text" placeholder="اسمك" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label style={{color: 'black'}}>البريد الإلكتروني</Form.Label>
              <Form.Control className='text-end' type="email" placeholder="email@mail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label style={{color: 'black'}}>رقم الجوال</Form.Label>
              <Form.Control type="number" placeholder="05xxxxxxxx" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMsg">
              <Form.Label style={{color: 'black'}}>رسالة</Form.Label>
              <Form.Control className='text-end' type="text" placeholder="أدخل رسالتك هنا" />
            </Form.Group>
            <Row className='d-flex justify-content-center align-items-center'><Button className='homeContactBtn px-5' style={{minWidth:'100% !important',maxWidth:'100% !important'}} type="submit">إرسال</Button></Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactUs