import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useState } from 'react';

function Initiatives() {
	const [selectedTab, setSelectedTab] = useState(1);
	const tabTitles = ['اكتشف', 'تعرف', 'أنضم'];
	const tab1Stats = ['250 انجاز', '15000 متدرب', '105 مبادرة'];
	return (
		<Container className='d-flex flex-column align-items-center'>
			<p className='pt-5' style={{ fontSize: '2.8rem' }}>مبادراتنا</p>
			<Row className='d-flex flex-row-reverse justify-content-center mt-5'>
				{
					tabTitles.map((value,index)=>{
						return <Col>
								<p style={{ backgroundColor: selectedTab === index+1 ? 'rgba(255, 255, 255, 0.2)' : 'transparent' }} onMouseEnter={() => setSelectedTab(index+1)} className='initTab px-4 py-1 mx-3'>{value}</p>
							</Col>
					})
				}
			</Row>
			<Row className='d-flex justify-content-center align-items-center mt-5' style={{ width: '58%' }}>
				<Col>
					<p className='text-center' style={{ fontSize: '1.5rem' }}>سعيًا لتحقيق رؤية المملكة في التحول الرقمي، وأيمانًا منا بقدرات ابناء الوطن، أطلقنا عدة مبادرات تهدف إلى صقل مهارات المتدربين في المجال التقني والمهني، وتهيئتهم لسوق العمل ودعمهم للوصول إلى تطلعاتهم، وذلك لبناء طريقًا افضل نحو المستقبل</p>
				</Col>
			</Row>
			<Row className='d-flex flex-row-reverse justify-content-around w-50 mt-5'>
				{
					tab1Stats.map((value)=>{
						return <Col>
							<Container style={{ backgroundColor: 'rgba(255,255,255,0.3)', width: 135, height: 135, borderRadius: '20px' }}>
								<Col className='d-flex flex-column h-100 justify-content-center align-items-center'>
									<p className='p-0 m-0' style={{fontSize: '2rem'}}>{value.split(' ')[0]}</p>
									<p className='p-0 m-0' style={{fontSize: '2rem', color: '#24b4ba'}}>{value.split(' ')[1]}</p>
								</Col>
							</Container>
						</Col>
					})
				}
			</Row>
			<Image className='position-absolute' src={`${process.env.PUBLIC_URL}/images/${selectedTab === 1 ? 'init1' : selectedTab === 2 ? 'init2' : 'init3'}.png`} style={{ opacity: 0.5, zIndex: -100 }} />
		</Container>
	)
}

export default Initiatives