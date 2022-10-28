import React from 'react'
import { Col,Row } from 'react-bootstrap'
import course from '../../images/12_6424f3f8-4a2f-48f9-b84b-fcf5a42c4000_480x480.webp'
import deleteicon from '../../images/delete.png'
const CartItem = () => {
    return (
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
        <img width="160px" height="197px" src={course} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between me-2">
              <div className="d-inline pt-2 cat-text " style={{color:"#099B93"}}>دورة قدرات لفظية</div>
              <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2">ازاله</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2 me-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title" >
              تعتمد هذه الدورة بشكل كبير على تشكيل الطلاب على القدرات اللفظيه
              
              </div>
             
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 me-2">
              <div className="cat-text d-inline"> التفاصيل :</div>
              <div className="barnd-text d-inline mx-1">تعتمد هذه الدورة بشكل كبير على تشكيل الطلاب على القدرات اللفظيه
              تعتمد هذه الدورة بشكل كبير على تشكيل الطلاب على القدرات اللفظيه
              تعتمد هذه الدورة بشكل كبير على تشكيل الطلاب على القدرات اللفظيه </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
              <div
                className="color ms-2 border"
                style={{ backgroundColor: "#E52C2C" }}></div>
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex me-2">

              </div>
              <div className="d-inline pt-2 barnd-text">٣٠٠٠ جنية</div>
            </Col>
          </Row>
        </div>
      </Col>
    )
}

export default CartItem