import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import StudentPrePay from '../../Components/Student/StudentPrePay'
import StudentSideBar from '../../Components/Student/StudentSideBar'
const StudentPrevPayPage = () => {
  return (
    
    <Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <StudentSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <StudentPrePay/>
                </Col>
            </Row>
        </Container>
    
  )
}

export default StudentPrevPayPage
