import React from 'react'
import { Link } from 'react-router-dom'
import { Col,Card,Row } from 'react-bootstrap'
import prod1 from '../../images/download.jpg'
const StudentAllCoursesCard = ({img , name , price ,id}) => {
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

        <Link to={`/course/${id}`} style={{ textDecoration: "none" }}>
            <Card.Img style={{ height: "228px", width: "100%" }} src={img} />
            <Card.Body>
                <Card.Title>
                    <div className="card-title">
                      {name}
                    </div>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-between">
                   
                        <div className="d-flex">
                            <div className="card-currency mx-1">ريال</div>
                            
                            <div className="card-price">{price}</div>
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
