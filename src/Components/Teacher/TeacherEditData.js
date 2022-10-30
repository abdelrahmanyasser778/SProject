import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const StudentEditData = () => {
  return (
    <Container style={{minHeight:"568px"}}>

       <Row className="justify-content-start ">
        <div className="admin-content-text pb-4 mt-3">   تعديل البيانات</div>
        <Col sm="8">
     
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم المعلم"
            />
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder=" الايميل"
            />
            <input
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="رقم  المعلم"
            />

        <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder=" العنوان"
            />
              <div className="admin-content-text pb-4 mt-3">   تعديل الصورة</div>
                                <form>
                <input type="file" id="myfile" name="myfile" multiple/>
                </form>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
    </Container>
    
  )
}

export default StudentEditData
