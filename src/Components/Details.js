import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
        
    <div class="Details mb-4">

    <Container >
        <Row >

            <Col  lg="3" md="6" sm="12" >
                <h3 className='mt-3'>مركز الفنون التقنية</h3>
                <div className='textBorder'>

                <div className="mt-4 detailsText">منصة الكترونية لتقديم الدورات المختصة مثل دورات التحصيلي ودورات القدرات يقدم تلك <br/>الدورات نخبة من افضل المدربين مع المتابعة الفائقة  للطلاب و التقيم المستمر لهم</div>
                </div>
            </Col>

            <Col lg="3" md="6" sm="6" >
                <h3 className='mt-3'>البريد الالكتروني</h3>
                <div className='emailBorder'>
                    <p className='email'>fenon@gmail.com</p>
                </div>
                   
            </Col>

            <Col lg="3" md="6" sm="6" >
                <h3 className='mt-3'>روابط</h3>
                <div className='holaaaa'>
                <Link to="/login" >

                <button className='btnDetailis'>تسجيل دخول</button>
                </Link>
                <button className='btnDetailis'>مشترياتي</button>
                
                <Link to="/register">

                <button className='btnDetailis'>اشترك</button>
                </Link>
                <button className='btnDetailis'>الدورات</button>
                </div>
               
            </Col>

            <Col lg="3" md="4" sm="6" >
                <h3 className='mt-3'>الجوال</h3>
                <div className='phoneBorder'>
                    <p className='email'>5655952</p>
                </div>
            </Col>

        </Row>
    </Container>
    </div>

  )
}

export default Details
