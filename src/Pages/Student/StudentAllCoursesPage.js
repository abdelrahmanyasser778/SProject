import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StudentAllCourses from '../../Components/Student/StudentAllCourses'
import OwnerSideBar from '../../Components/Student/StudentSideBar'

const OwnerAllDataPage = () => {
  return (
    <div>
    <Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <OwnerSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <StudentAllCourses/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OwnerAllDataPage
