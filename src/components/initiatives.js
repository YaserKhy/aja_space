import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useState } from 'react';

function Initiatives() {
	const [hoverEffect, setHoverEffect] = useState(1);
	return (
		<Container className='d-flex flex-column align-items-center'>
			<p className='pt-5' style={{ fontSize: '2.8rem' }}>مبادراتنا</p>
			<Row className='d-flex flex-row-reverse justify-content-center mt-5'>
				<Col>
					<p style={{ backgroundColor: hoverEffect === 1 ? 'rgba(255, 255, 255, 0.2)' : 'transparent' }} onMouseEnter={() => setHoverEffect(1)} className='initTab px-4 py-1 mx-3'>اكتشف</p>
				</Col>
				<Col>
					<p style={{ backgroundColor: hoverEffect === 2 ? 'rgba(255, 255, 255, 0.2)' : 'transparent' }} onMouseEnter={() => setHoverEffect(2)} className='initTab px-4 py-1 mx-3'>تعرف</p>
				</Col>
				<Col>
					<p style={{ backgroundColor: hoverEffect === 3 ? 'rgba(255, 255, 255, 0.2)' : 'transparent' }} onMouseEnter={() => setHoverEffect(3)} className='initTab px-4 py-1 mx-3'>أنضم</p>
				</Col>
			</Row>
			<Row className='d-flex justify-content-center align-items-center mt-5' style={{ width: '58%' }}>
				<Col>
					<p className='text-center' style={{ fontSize: '1.5rem' }}>.سعيًا لتحقيق رؤية المملكة في التحول الرقمي، وأيمانًا منا بقدرات ابناء الوطن، أطلقنا عدة مبادرات تهدف إلى صقل مهارات المتدربين في المجال التقني والمهني، وتهيئتهم لسوق العمل ودعمهم للوصول إلى تطلعاتهم، وذلك لبناء طريقًا افضل نحو المستقبل</p>
				</Col>
			</Row>
			<Row className='d-flex justify-content-around w-50 mt-5'>
				<Col>
					<Container style={{ backgroundColor: 'white', opacity: 0.3, width: 135, height: 135, borderRadius: '20px' }}>
						<p>lkjhgf</p>
					</Container>
				</Col>
				<Col>
					<Container style={{ backgroundColor: 'white', opacity: 0.3, width: 135, height: 135, borderRadius: '20px' }}>
						<p>lkjhgf</p>
					</Container>
				</Col>
				<Col>
					<Container style={{ backgroundColor: 'white', opacity: 0.3, width: 135, height: 135, borderRadius: '20px' }}>
						<p>lkjhgf</p>
					</Container>
				</Col>
			</Row>
			<Image className='position-absolute' src={`${process.env.PUBLIC_URL}/images/${hoverEffect === 1 ? 'init1' : hoverEffect === 2 ? 'init2' : 'init3'}.png`} style={{ opacity: 0.5, zIndex: -100 }} />
		</Container>
	)
}

export default Initiatives