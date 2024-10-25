import React from 'react'
import {Col, Image} from 'react-bootstrap'

function ValuesIcon({icon, label}) {
    return (
        <Col className='d-flex flex-column align-items-center valueIconCard'>
            <Image src={icon} width={50} className='py-3 valuesIcon'/>
            <p className='py-3 text-center valuesText'>{label}</p>
        </Col>
    )
}

export default ValuesIcon