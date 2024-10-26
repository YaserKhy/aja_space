import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import SectionTitle from './custom/section_title'

function Clients() {
	return (
		<Container id='cli' style={{minHeight:'100vh'}}>
			<SectionTitle title={'عملائنــا'} subTitle={'عملاء فضاء أجا'}></SectionTitle>
			<Row className='d-flex flex-row-reverse justify-content-center align-items-center my-5'>
				<Col className='d-flex justify-content-center align-items-center client'><Image src={`${process.env.PUBLIC_URL}/icons/clients/client1.png`} width={200} /></Col>
				<Col className='d-flex justify-content-center align-items-center client'><Image src={`${process.env.PUBLIC_URL}/icons/clients/client2.png`} width={100} /></Col>
				<Col className='d-flex justify-content-center align-items-center client'><Image src={`${process.env.PUBLIC_URL}/icons/clients/client3.png`} width={200} /></Col>
			</Row>
			<Row className='d-flex flex-row-reverse justify-content-center align-items-center my-5'>
				<Col className='d-flex justify-content-center align-items-center client'><Image src={`${process.env.PUBLIC_URL}/icons/clients/client4.png`} width={200} /></Col>
				<Col className='d-flex justify-content-center align-items-center client'><Image src={`${process.env.PUBLIC_URL}/icons/clients/client5.png`} width={200} /></Col>
				<Col className='d-flex justify-content-center align-items-center client'><Image src={`${process.env.PUBLIC_URL}/icons/clients/client6.png`} width={200} /></Col>
			</Row>
		</Container>
	)
}

export default Clients