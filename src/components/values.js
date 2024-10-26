import React from 'react'
import { Row, Container } from 'react-bootstrap'
import SectionTitle from './custom/section_title'
import ValuesIcon from './custom/values_icon'

function Values() {
	return <Container style={{ minHeight: '80vh' }}>
		<SectionTitle title={'قيمنـــا'} subTitle={'قيم فضاء أجا'}></SectionTitle>
		<Row className='d-flex flex-row-reverse mt-5 pt-5 justify-content-center'>
			<ValuesIcon label={'الاتقان والجودة'} icon={`${process.env.PUBLIC_URL}/icons/values/value1.png`} />
			<ValuesIcon label={'الحفاظ على الخصوصيه'} icon={`${process.env.PUBLIC_URL}/icons/values/value2.png`} />
			<ValuesIcon label={'الولاء والانتماء'} icon={`${process.env.PUBLIC_URL}/icons/values/value3.png`} />
			<ValuesIcon label={'العمل بروح الفريق'} icon={`${process.env.PUBLIC_URL}/icons/values/value4.png`} />
			<ValuesIcon label={'المصداقية والشفافية'} icon={`${process.env.PUBLIC_URL}/icons/values/value5.png`} />
			<ValuesIcon label={'الاصالة والابداع'} icon={`${process.env.PUBLIC_URL}/icons/values/value6.png`} />
		</Row>
	</Container>
}

export default Values