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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactUs