import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MangerNumberOfTeachers from '../../Components/Manger/MangerNumberOfTeachers'
import MangerSideBar from '../../Components/Manger/MangerSideBar'
const MangerNumberOfTeachersPage = () => {
  return (
    <div>
          <Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <MangerSideBar/>
                </Col>

                <Col sm="9" xs="10" md="10">
                <MangerNumberOfTeachers/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MangerNumberOfTeachersPage
