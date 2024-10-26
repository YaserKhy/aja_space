import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useState } from 'react';
import Initiative1 from './initiative1';
import Initiative2 from './initiative2';
import Initiative3 from './initiative3';

function Initiatives() {
	const [selectedTab, setSelectedTab] = useState(1);
	const tabTitles = ['اكتشف', 'تعرف', 'أنضم'];
	return (
		<Container className='d-flex flex-column align-items-center' style={{minHeight: '100vh'}}>
			<p className='initTitle pt-5' style={{ fontSize: '2.8rem' }}>مبادراتنا</p>
			<Row className='d-flex flex-row-reverse justify-content-center mt-3'>
				{
					tabTitles.map((value, index) => {
						return <Col>
							<p style={{ backgroundColor: selectedTab === index + 1 ? 'rgba(255, 255, 255, 0.2)' : 'transparent' }} onMouseEnter={() => setSelectedTab(index + 1)} className='initTab'>{value}</p>
						</Col>
					})
				}
			</Row>
			{selectedTab === 2 ? <Initiative2 /> : selectedTab === 3 ? <Initiative3 /> : <Initiative1 />}
			<Image className='position-absolute' src={`${process.env.PUBLIC_URL}/images/${selectedTab === 1 ? 'init1' : selectedTab === 2 ? 'init2' : 'init3'}.png`} style={{ opacity: 0.5, zIndex: -100 }} />
		</Container>
	)
}

export default Initiatives