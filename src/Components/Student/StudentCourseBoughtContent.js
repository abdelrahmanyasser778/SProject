import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import video from '../../images/Crowd Bonus App.mp4'
const StudentCourseBoughtContent = () => {
  return (
    <div>
              <Container>
            <Row className='me-5'>
                <Col className='mt-3'> 
                    <div style={{fontSize:"19px",fontWeight:"bold"}}>اسم المعلم</div>
                    <div style={{color:"#099B93"}}>Mansour soliman</div>
                </Col>
                <Col className='mt-3'> 
                    <div style={{fontSize:"19px",fontWeight:"bold"}}>اسم الدورة</div>
                    <div style={{color:"#099B93"}}>  دورة حاسوب</div>
                </Col>

            </Row>

            <video controls >
                <source src={video} type="video/mp4"/>
            </video>

            <p className='mt-3' style={{color:"#099B93",fontSize:"19px",fontWeight:"bold"}}>المنهج التعليمي</p>

            <Row className='mb-5'>
            <Col>

            <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 " style={{width:"50%"}}>
                        <option value="val"> الباب الاول</option>
                        <option value="val"> المحاضرة الاولى</option>
                        <option value="val2"> المحاضرة الثانية</option>
                        <option value="val2"> المحاضرة الثالثة</option>
                        <option value="val2">المحاضرة الرابعة</option>
                    </select>
            <Col>

                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 " style={{width:"50%"}}>
                        <option value="val"> الباب الثاني</option>
                        <option value="val"> المحاضرة الاولى</option>
                        <option value="val2"> المحاضرة الثانية</option>
                        <option value="val2"> المحاضرة الثالثة</option>
                        <option value="val2">المحاضرة الرابعة</option>
                    </select>
            </Col>

            <Col>

                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 " style={{width:"50%"}}>
                        <option value="val"> الباب الثالث</option>
                        <option value="val"> المحاضرة الاولى</option>
                        <option value="val2"> المحاضرة الثانية</option>
                        <option value="val2"> المحاضرة الثالثة</option>
                        <option value="val2">المحاضرة الرابعة</option>
                    </select>
                    </Col>
 
            </Col>

            <Col>
                <div style={{color:"#099B93",fontSize:"19px",fontWeight:"bold"}}>تتضمن هذه الدورة مجموعة من المقاطع عن الحوسبة :</div>
                <div>المدة:  <span style={{color:"#099B93"}}>20 ساعة</span></div>
                <div>االمستوى:  <span  style={{color:"#099B93"}}>مبتدئ</span></div>
                <div> عدد الطلاب:<span  style={{color:"#099B93"}}>3</span> </div>
            
            </Col>
            </Row>
            <Row>
                <Col>
                    <div  className="mb-3"style={{color:"#099B93",fontSize:"19px",fontWeight:"bold"}}>الاختبارات</div>
                    <Row>
                        <Col> <p>الاختبار الاول</p></Col>
                        <Col>  <button className="btn-save   ">اجراء</button></Col>
                    </Row>
                    <Row>
                        <Col> <p >الاختار الاول</p></Col>
                        <Col>  <button className="btn-save mt-1  ">اجراء</button></Col>
                    </Row>
                    <Row>
                        <Col> <p className='mb-2'>الاختار الاول</p></Col>
                        <Col>  <button className="btn-save   mt-1  mb-2">اجراء</button></Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default StudentCourseBoughtContent
