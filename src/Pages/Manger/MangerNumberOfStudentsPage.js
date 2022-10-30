import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MangerNumberOfStudents from '../../Components/Manger/MangerNumberOfStudents'
import MangerSideBar from '../../Components/Manger/MangerSideBar'

const MangerNumberOfStudentsPage = () => {
    return (
       
    <Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <MangerSideBar/>
                </Col>

                <Col sm="9" xs="10" md="10">
                    <MangerNumberOfStudents/>
                </Col>
            </Row>
        </Container>

      )
}

export default MangerNumberOfStudentsPage
