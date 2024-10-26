import React from 'react'
import { Col, Image } from 'react-bootstrap'

function ValuesIcon({ icon, label }) {
	return (
		<Col md={6} sm={6} className='d-flex flex-column align-items-center valueIconCard'>
			<Image src={icon} width={50} className='py-3 valuesIcon' />
			<p className='py-3 text-center valuesText'>{label}</p>
		</Col>
	)
}

export default ValuesIcon