import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid style={{ backgroundImage: 'linear-gradient(to bottom left,#0A0050,#0C0829)', margin:'0px !important', padding:'30px 50px' ,width: '100%', height: '120px' }}>
            <Row className='d-flex justify-content-center flex-row-reverse'>
                <Col className='text-end'><Image src={`${process.env.PUBLIC_URL}/images/square_logo.png`} width={70}/></Col>
                <Col className='text-start d-flex justify-content-start p-0'>
                    <Row className='d-flex flex-row-reverse'>
                        <Col className='text-start px-1' lg={'auto'}><p>جميع الحقوق محفوظة</p></Col>
                        <Col className='text-start px-1' lg={'auto'}><p style={{color:'#1A82CB'}}>لفضاء أجا</p></Col>
                        <Col className='text-start px-1'><p>2022</p></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer