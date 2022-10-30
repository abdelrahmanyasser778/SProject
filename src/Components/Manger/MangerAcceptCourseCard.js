import React from 'react'
import { Link } from 'react-router-dom'
import { Col,Card,Row } from 'react-bootstrap'
import prod1 from '../../images/download.jpg'
const MangerAcceptCourseCard = () => {
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
    <Card
        className="my-2"
        style={{
            width: "100%",
            height: "350px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
        }}>

     
            <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
            <Card.Body>
                <Card.Title>
                    <div className="card-title">
                      اسم الدورة{" "}
                    </div>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-between">
                   
                        <div className="d-flex">
                        <button className="btn-save d-inline mt-2 ">  الموافقة على الطلب</button>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        
    </Card>
</Col>
  )
}

export default MangerAcceptCourseCard
