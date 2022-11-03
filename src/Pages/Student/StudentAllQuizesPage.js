import React from 'react'
import OwnerSideBar from '../../Components/Student/StudentSideBar'
import { Container, Row, Col } from 'react-bootstrap'
import StudentAllQuizes from '../../Components/Student/StudentAllQuizes'
const StudentAllQuizesPage = () => {
  return (
    <div>
        <Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <OwnerSideBar/>
                </Col>

                <Col sm="9" xs="10" md="10">
                    <StudentAllQuizes/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default StudentAllQuizesPage
