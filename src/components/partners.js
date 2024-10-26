import React from 'react'
import { Container, Image } from 'react-bootstrap'
import SectionTitle from './custom/section_title'

function Partners() {
	return (
		<Container style={{minHeight: '70vh'}}>
			<SectionTitle title={''} subTitle={'شركاؤنا'}></SectionTitle>
			<Container className='d-flex flex-row-reverse justify-content-around align-items-center py-5 partnersBox'>
				<Image className='p-5' src={`${process.env.PUBLIC_URL}/icons/partners/partner1.png`} width={220}/>
				<Image className='p-5' src={`${process.env.PUBLIC_URL}/icons/partners/partner2.png`} width={320}/>
			</Container>
		</Container>
	)
}

export default Partners