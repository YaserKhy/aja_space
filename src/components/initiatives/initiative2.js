import React from 'react'
import {Col, Row} from 'react-bootstrap'

function Initiative2() {
	const titles = ['مبادرةالأمن السيبراني', 'مبادرة البرمجة', 'مبادرة الشبكات', 'مبادرة تحليل البيانات']
	const descs = [
		'تقديم فهم شامل للأمن السيبراني، بدءًا من المبادئ الأساسية إلى الإجراءات الأمنية المتقدمة. سيتعلم المشاركون كيفية حماية الأنظمة والشبكات من التهديدات الإلكترونية، والتحقيق في الحوادث الأمنية، وتطوير سياسات وإجراءات الأمان',
		'تهدف الى تعلم أساسيات ومتقدمات البرمجة باستخدام لغات البرمجة، مع التركيز على كتابة الأكواد وتطوير المشاريع البرمجية',
		'تهدف هذه المبادرة الى فهم البنية الأساسية للشبكات وتصميمها وإدارتها، مع التركيز على حل مشاكل الشبكات وضمان الأداء الآمن والفعال',
		'تعلم جمع وتنظيف وتحليل البيانات باستخدام الأدوات، لاستخراج المعلومات واتخاذ القرارات المستندة إلى البيانات'
	]
	return (
		<Row className='d-flex flex-wrap flex-row-reverse mt-5 px-5'>
			{
				titles.map((value,index)=>{
					return <Col lg={4} sm={12} xs={12} className='d-flex flex-column align-items-center'>
					<p style={{fontSize: '1.8rem'}} className='text-center'>{value}</p>
					<p style={{fontSize: '1.2rem', maxWidth:'339px'}} className='text-center'>{descs[index]}</p>
					</Col>
				})
			}
		</Row>
	)
}

export default Initiative2