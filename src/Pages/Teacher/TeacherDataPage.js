import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TeacherData from '../../Components/Teacher/TeacherData'
import TeacherSideBar from '../../Components/Teacher/TeacherSideBar'
const TeacherDataPage = () => {
  return (
    <div>
    <Container style={{ minHeight: "568px" }} >
       <Row className='py-3'>
           <Col sm="3" xs="2" md="2">
               <TeacherSideBar />
           </Col>

           <Col sm="9" xs="10" md="10">
               <TeacherData/>
           </Col>
       </Row>
   </Container>
</div>
  )
}

export default TeacherDataPage
