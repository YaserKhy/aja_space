import { faLinkedin, faTiktok, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function SocialInfo() {
  return (
    <Row className='mt-5 pe-5' style={{width:'fit-content'}}>
        <Col>
        <Container className='d-flex justify-content-center align-items-center socialIcon'>
          <FontAwesomeIcon icon={faWhatsapp}/>
        </Container>
        </Col>
        <Col>
        <Container className='d-flex justify-content-center align-items-center socialIcon'>
          <FontAwesomeIcon icon={faTwitter}/>
        </Container>
        </Col>
        <Col>
        <Container className='d-flex justify-content-center align-items-center socialIcon'>
          <FontAwesomeIcon icon={faLinkedin}/>
        </Container>
        </Col>
        <Col>
        <Container className='d-flex justify-content-center align-items-center socialIcon'>
          <FontAwesomeIcon icon={faTiktok}/>
        </Container>
        </Col>
    </Row>
  )
}

export default SocialInfo