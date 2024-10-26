import React from 'react'
import { Col, Button } from 'react-bootstrap'

function Initiative3() {
	return (
		<Col className='d-flex justify-content-center align-items-center flex-column w-50 my-5'>
			<p style={{ color: '#1A82CB', fontSize: '2.2rem' }}>مجتمع فضاء اجا التقني</p>
			<p className='text-center' style={{ fontSize: '1.4rem' }}>هو فرع ينتمي الى مؤسسة فضاء اجا لتقنية المعلومات . يشكل هذا المجتمع مساحة اجتماعية يجتمع فيها جميع هواة التقنية, بدءا من المبتدئين و صولا الى الخبراء المحترفين . يتميز المجتمع بروح التعاون وحب التقنية و الرغبة في التعلم و التطور</p>
			<Button className='my-5' style={{ backgroundColor: '#1A82CB' }}>
				<Col>
					<p>أنضم إلينا</p>
				</Col>
			</Button>
		</Col>
	)
}

export default Initiative3