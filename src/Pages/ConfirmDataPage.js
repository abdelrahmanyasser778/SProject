import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ConfirmDataPage = () => {
  return (
    <Container style={{minHeight:"568px"}}>

    <Row className="justify-content-start ">
     <div className="admin-content-text pb-4 mt-3">   اتمام البيانات </div>
     <Col sm="8">
  
         <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder="اسم الطالب"
         />
         <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder=" الايميل"
         />
         <input
             type="number"
             className="input-form d-block mt-3 px-3"
             placeholder="رقم  الطالب"
         />

     <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder=" العنوان"
         />
              <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder=" معلومات اضافية"
         />
          

     </Col>
 </Row>
 <Row>
     <Col sm="8" className="d-flex justify-content-end ">
        <Link to="/order/paymethod" style={{textDecoration:"none"}}>

         <button className="btn-save d-inline mt-2 "> اتمام الشراء</button>
        </Link>
     </Col>
 </Row>
 </Container>
  )
}

export default ConfirmDataPage
