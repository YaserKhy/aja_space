import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

function Initiative1() {
	const stats = ['250 انجاز', '15000 متدرب', '105 مبادرة'];
	return (
		<>
		<Row id='init1' className='d-flex justify-content-center align-items-center mt-5' style={{ width: '58%' }}>
				<Col>
					<p className='text-center' style={{ fontSize: '1.5rem' }}>سعيًا لتحقيق رؤية المملكة في التحول الرقمي، وأيمانًا منا بقدرات ابناء الوطن، أطلقنا عدة مبادرات تهدف إلى صقل مهارات المتدربين في المجال التقني والمهني، وتهيئتهم لسوق العمل ودعمهم للوصول إلى تطلعاتهم، وذلك لبناء طريقًا افضل نحو المستقبل</p>
				</Col>
			</Row>
			<Row className='d-flex flex-row-reverse justify-content-around w-50 mt-5'>
				{
					stats.map((value)=>{
						return <Col id='statBoxContainer'>
							<Container className='statBox'>
								<Col className='d-flex flex-column justify-content-center align-items-center'>
									<p className='stat'>{value.split(' ')[0]}</p>
									<p className='stat' style={{color: '#24b4ba'}}>{value.split(' ')[1]}</p>
								</Col>
							</Container>
						</Col>
					})
				}
			</Row>
		</>
	)
}

export default Initiative1