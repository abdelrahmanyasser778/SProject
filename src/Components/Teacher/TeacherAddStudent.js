import React from 'react'
import { Row, Col } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
const AdminAddStudent = () => {
  return (
    <div >
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه طالب جديد</div>
        <Col sm="8">
     
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم الطالب"
            />
            <textarea
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="رقم الطالب"
            />
            <input
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="رقم ولي الامر"
            />
            <input
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="سعر المنتج"
            />

        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
</div>
  )
}

export default AdminAddStudent
