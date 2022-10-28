import React from 'react'
import oneimg from '../images/hhhh.png';
import twoimg from '../images/Untitled-4.png';
import  threeimg from '../images/Untitled-5.png';
import imgfor from '../images/Untitled-6.png'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <div style={{backgroundColor:"#099B93" }} >
    <Container>

      <Row className="">
        <div className='d-flex justify-content-center my-3 OnlineText'>تعلم اونلاين</div>
      </Row>

      <Row className="">
        <div className='d-flex justify-content-around my-3 OnlineTextOne mt-4'>خبراؤنا متخصصون و مؤهلون لتقديم العلم والمعرفة المكتسبة من تجارب<br/> فريدة والتي من شأنها أن تساعدك في تحقيق أهدافك في العمل والحياة</div>
      </Row>
      
      


  <Row className='pb-5' >
      <Col sm="6" lg="3">
          <img src={oneimg} />
          <p className='OnlineTextOne'> يمكن للمعلمين تخصيص التعليمات <br/> وتلبية احتياجات كل طالب</p>
      </Col>
      <Col sm="6" lg="3">
          <img src={twoimg} />
          <p className='OnlineTextOne'>خبرة اكاديمية لفترة كبيرة بشهادة<br/> الطلاب واولياء الامور</p>
      </Col>
      <Col sm="6" lg="3">
          <img src={imgfor} />
          <p className='OnlineTextOne'>فريق من المدربين المختصين في القدرات والتحصيلي</p>
      </Col>
      <Col sm="6" lg="3">
          <img src={threeimg}  />
          <p className='OnlineTextOne'  >نهدف لتحقيق اكبر قدر ممكن من التعلم للطلاب للاستفادة بشكل كبير </p>
      </Col>
  </Row>


    </Container>

    </div>
  )
}

export default About
