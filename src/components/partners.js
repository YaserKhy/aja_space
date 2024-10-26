import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import SectionTitle from './custom/section_title'

function Partners() {
	return (
		<Container className='d-flex flex-column text-center justify-content-center align-items-center' style={{minHeight: '70vh'}}>
			<SectionTitle title={''} subTitle={'شركاؤنا'}></SectionTitle>
			<Row className='d-flex flex-row-reverse justify-content-around align-items-center py-5 partnersBox'>
				<Col lg={6} md={12} sm={12}><Image className='partnerImg' src={`${process.env.PUBLIC_URL}/icons/partners/partner1.png`} width={220}/></Col>
				<Col lg={6} md={12} sm={12}><Image className='partnerImg' src={`${process.env.PUBLIC_URL}/icons/partners/partner2.png`} width={320}/></Col>
			</Row>
		</Container>
	)
}

export default Partners