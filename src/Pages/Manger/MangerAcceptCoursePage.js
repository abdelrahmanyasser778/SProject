import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MangerAcceptCourse from '../../Components/Manger/MangerAcceptCourse'
import MangerSideBar from '../../Components/Manger/MangerSideBar'
const MangerAcceptCoursePage = () => {
  return (
<Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <MangerSideBar/>
                </Col>

                <Col sm="9" xs="10" md="10">
                    <MangerAcceptCourse/>
                </Col>
            </Row>
        </Container>

  )
}

export default MangerAcceptCoursePage
