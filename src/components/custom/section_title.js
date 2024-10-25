import React from 'react'
import { Col } from 'react-bootstrap'

function SectionTitle({ title, subTitle }) {
    return (
        <Col className='d-flex flex-column w-100 mt-4 justify-content-center'>
            <p className='text-center pt-5 m-0' style={{ fontSize: '1rem' }}>{title}</p>
            <p className='text-center pb-2' style={{ fontSize: '1.7rem' }}>{subTitle}</p>
        </Col>
    )
}

export default SectionTitle