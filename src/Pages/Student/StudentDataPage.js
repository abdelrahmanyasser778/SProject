import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OwnerAllStudents from '../../Components/Student/StudentData'
import OwnerSideBar from '../../Components/Student/StudentSideBar'

const OwnerAllStudentsPage = () => {
  return (
    <div>
         <Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <OwnerSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <OwnerAllStudents/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OwnerAllStudentsPage
