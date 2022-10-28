import React from 'react'
import { Container, Row ,Col, Button } from 'react-bootstrap'
import imageLearn from '../images/kelly-sikkema-6aY-6B3MiZ4-unsplash1-1024x683.jpg'
const LearnMore = () => {
  return (
    <div>
        <Container fluid>
            <Row>
           
                <Col  xs="12" sm="6" className='LearnPara' >
                    <p className='textttt'>تعلم بلا حدود</p>
                    <p className='LearnText pt-5'>معرض الفنون التقنية يقدم التعليم الذي يحتاجون إليه</p>
                    <p className='LearnText'>ابدأ حياتك المهنية أو بدّلها أو ارتقِ بها مع الكثير من الدورات واحصل على <br/>  شهادات مهنية ودرجات علمية في مجالات كثيرة و بأسعار مميزة</p>
                    <p className='LearnText'>نسعى إلى رفع مستوى التعليم الإلكتروني في  المملكة  كما نوفر فرصة لاصحاب الكفاءات والخبرات والمدرسين للوصول إلى جمهور أكبر</p>
                   
                   <div className='d-flex justify-content-center'>
                   <button className='btnLearning'>الدورات التدريبية</button>
                   </div>

                   
                   
                </Col>
                
                <Col xs="12" md="6" sm="6" className='yarab'>
                    <img  src={imageLearn} style={{maxWidth:"100%",maxHeight:"100%"}} />
                </Col>
            </Row>
            </Container>
    </div>
  )
}

export default LearnMore
