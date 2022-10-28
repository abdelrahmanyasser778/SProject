import React from 'react'
import AdminSideBar from '../../Components/Teacher/TeacherSideBar'
import { Container, Row, Col } from 'react-bootstrap'
import TeacherShowGrade from '../../Components/Teacher/TeacherShowGrade'

const AdminShowGradePages = () => {
  return (
    <div>
          <Container style={{minHeight:"567px"}}>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                 <TeacherShowGrade/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AdminShowGradePages
