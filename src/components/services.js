import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from './custom/section_title'
import ServiceCard from './custom/service_card'

function Service() {
    return (
        <Container id='serv'>
            <SectionTitle title={'ماذا نقــدم؟'} subTitle={'خدماتنا'}></SectionTitle>
            <hr className='pb-4' style={{ color: 'blue', opacity: 0.2 }}></hr>
            <Container className='d-flex flex-column'>
                <Row className='d-flex flex-row-reverse'>
                    <Col><ServiceCard icon={`${process.env.PUBLIC_URL}/icons/service1.png`} title={'الامن السيبراني'} desc={'ندفع مؤسستك نحو مستقبل امن من خلال حماية بياناتك وتأمينها من التهديدات الرقمية للحفاظ على ثقة العملاء والامتثال للمتطلبات التنظيمية'}></ServiceCard></Col>
                    <Col><ServiceCard icon={`${process.env.PUBLIC_URL}/icons/service2.png`} title={'المواقع الإلكترونية'} desc={'بناء المواقع التقليدية و برامج الديسك توب للمشاريع الصغيرة والكبيرة ايضا التطوير والتعديل على المنصات'}></ServiceCard></Col>
                    <Col><ServiceCard icon={`${process.env.PUBLIC_URL}/icons/service3.png`} title={'برمجة التطبيقات'} desc={'كتابة أنواع البرمجيات بناءً على الطلبات، باستخدام أحدث التقنيات لإنتاج التطبيقات من الصفر، بالإضافة إلى إجراء عمليات التطوير والتحسين والتعديل على البرامج والتطبيقات'}></ServiceCard></Col>
                </Row>
                <Row className='d-flex flex-row-reverse'>
                    <Col><ServiceCard icon={`${process.env.PUBLIC_URL}/icons/service4.png`} title={'حمايـة الشبكـات'} desc={'نوفر الحماية و الأمان للشبكات في مؤسستك ضمن منظومة متسقة تسعى ان تحقق البناء المثالي للشبكات داخل المنشات'}></ServiceCard></Col>
                    <Col><ServiceCard icon={`${process.env.PUBLIC_URL}/icons/service5.png`} title={'الاستشارات التقنية'} desc={'نسهل وصولك للمعلومات و الإجابة على الاستشارات التقنية و الاستفادة من الخبراء في المجال التقني لمشروعك\n" أول الحزم المشورة "'}></ServiceCard></Col>
                    <Col><ServiceCard icon={`${process.env.PUBLIC_URL}/icons/service6.png`} title={'التصميم والتسـويق'} desc={'نصنع لك هوية مميزة تلامس عملائك و تحفز قبولهم لك, بدءا من تصميم شعار يرسخ في ذهن العميل الى بناء عناصر بصرية و عناصر ملموسة تلائم منشئتك'}></ServiceCard></Col>
                </Row>
            </Container>
        </Container>

    )
}

export default Service