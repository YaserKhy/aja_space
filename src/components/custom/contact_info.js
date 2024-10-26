import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactInfo({ title, subTitle, icon }) {
	return (
		<Col>
			<Row className='d-flex justify-content-end align-items-center py-3'>
				<Col xs={'auto'}><p className='text-end mb-0' style={{ color: '#3326ae', fontSize: '1.5rem' }}>{title}</p></Col>
				<Col xs={'auto'}><FontAwesomeIcon icon={icon} size="xl" className='contactIcon' /></Col>
			</Row>
			<Row>
				<Col><p className='pe-5'>{subTitle}</p></Col>
			</Row>
		</Col>
	)
}

export default ContactInfo