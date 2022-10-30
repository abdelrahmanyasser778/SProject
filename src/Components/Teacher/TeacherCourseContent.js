import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import video from '../../images/Crowd Bonus App.mp4'
const TeacherCourseContent = () => {
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
                    <div style={{color:"#099B93",fontSize:"19px",fontWeight:"bold"}}>اضافة اختبار</div>
                </Col>
                <Col>
                <textarea 
                        className="input-form-area"
                        rows="4"
                        cols="10"
                        style={{height:"60px"}}
                        placeholder=" رابط الاختبار"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end mb-3">
                    <button className="btn-save d-inline mt-2 "> اضافة اختبار</button>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <div style={{color:"#099B93",fontSize:"19px",fontWeight:"bold"}}>اضافة دروس جديدة</div>
                </Col>
                <Col>
                <form>
                <input type="file" id="myfile" name="myfile" multiple/>
                </form>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end mb-3">
                    <button className="btn-save d-inline mt-2 "> اضافة دروس جديدة</button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TeacherCourseContent
