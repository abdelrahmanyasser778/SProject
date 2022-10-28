import React from 'react'
import StudentAllCourses from '../Components/Student/StudentAllCourses'
import { Container, Row, Col } from 'react-bootstrap'
const AllCorsesPage = () => {
  return (
    <div>
        <Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>


                <Col sm="9" xs="10" md="10">
                    <StudentAllCourses/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AllCorsesPage
