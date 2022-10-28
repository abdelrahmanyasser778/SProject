import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddStudent from '../../Components/Teacher/TeacherAddStudent'
import AdminSideBar from '../../Components/Teacher/TeacherSideBar'

const AdminAddStudentPage = () => {
  return (
    <Container style={{ minHeight: "568px" }}  >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
            <AdminAddStudent/>
        </Col>
    </Row>
</Container>
  )
}

export default AdminAddStudentPage
