import React from 'react'
import { Row, Container } from 'react-bootstrap'
import ValuesIcon from './custom/values_icon'

function Values() {
    return <Container>
        <Row className='d-flex flex-column w-100 mt-4 justify-content-center'>
            <p className='text-center pt-5 m-0' style={{ fontSize: '1rem' }}>قيمنـــا</p>
            <p className='text-center pb-2' style={{ fontSize: '1.7rem' }}>قيم فضاء أجا</p>
        </Row>
        <Row className='d-flex flex-row-reverse mt-5 pt-5'>
            <ValuesIcon label={'الاتقان والجودة'} icon={`${process.env.PUBLIC_URL}/icons/value1.png`} />
            <ValuesIcon label={'الحفاظ على الخصوصيه'} icon={`${process.env.PUBLIC_URL}/icons/value2.png`} />
            <ValuesIcon label={'الولاء والانتماء'} icon={`${process.env.PUBLIC_URL}/icons/value3.png`} />
            <ValuesIcon label={'العمل بروح الفريق'} icon={`${process.env.PUBLIC_URL}/icons/value4.png`} />
            <ValuesIcon label={'المصداقية والشفافية'} icon={`${process.env.PUBLIC_URL}/icons/value5.png`} />
            <ValuesIcon label={'الاصالة والابداع'} icon={`${process.env.PUBLIC_URL}/icons/value6.png`} />
        </Row>
    </Container>
}

export default Values