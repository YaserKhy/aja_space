import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'

function Home() {
	return (
		<Container id='home' className='d-flex align-items-center'>
			<Row className='d-flex justify-content-between align-items-center w-100'>
				<Col>
					<Image className='animatedLogo' src={`${process.env.PUBLIC_URL}/logo.png`} width={400} />
				</Col>
				<Col className='d-flex flex-column justify-content-start'>
					<Row className='d-flex flex-column justify-content-start'>
						<p className='text-end' style={{ fontSize: '3.4rem', color: 'white' }}>فضاء أجا لتقنية المعلومات</p>
						<p className='text-end' style={{ fontSize: '2rem', fontWeight: 300, color: '#1A82CB' }}>أول مؤسسة رائدة في منطقة حائل</p>
					</Row>
					<Row className='d-flex justify-content-center'>
						<Button className='homeContactBtn px-4 py-2'>ابقى على تواصل</Button>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Home