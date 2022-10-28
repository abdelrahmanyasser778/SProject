import React from 'react'
import { Link } from 'react-router-dom'
import { Col,Card,Row } from 'react-bootstrap'
import prod1 from '../../images/download.jpg'
const StudentAllCoursesCard = () => {
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

        <Link to="/course/:id" style={{ textDecoration: "none" }}>
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
                            <div className="card-currency mx-1">جنيه</div>
                            
                            <div className="card-price">880</div>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Link>
    </Card>
</Col>
  )
}

export default StudentAllCoursesCard
