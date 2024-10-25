import React from 'react'
import { Container, Image } from 'react-bootstrap'
import SectionTitle from './custom/section_title'

function Events() {
    return (
        <Container className='mt-5'>
            <SectionTitle title={""} subTitle={"فعـالياتنــا"}></SectionTitle>
            <Container className='d-flex justify-content-center align-items-center'>
                <a href='##' className='text-center'><Image className='eventImage' src={`${process.env.PUBLIC_URL}/images/event.png`} /></a>
            </Container>
        </Container>
    )
}

export default Events