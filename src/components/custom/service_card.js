import React from 'react'
import { Container, Col, Image, Button} from 'react-bootstrap'

function ServiceCard({icon, title, desc}) {
    return (
        <Container className='p-4 m-2 d-flex flex-row serviceCard' style={{border: '2px solid #1A82CB', borderRadius:'20px', minHeight:410, maxHeight:410}}>
            <Col className='d-flex flex-column justify-content-around align-items-center'>
            <Image src={icon} width={50} className='d-flex flex-row justify-content-center align-items-center serviceImg'/>
            <p className='text-center' style={{fontSize:'1.6rem'}}>{title}</p>
            <p className='text-center' style={{fontSize:'1rem', fontWeight:700, color:'#1A82CB'}}>{desc}</p>
            <Button className='homeContactBtn px-4 py-2'>اطلب الخدمة</Button>
            </Col>
        </Container>
    )
}

export default ServiceCard