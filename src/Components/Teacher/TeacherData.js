import React from 'react'
import { Link } from 'react-router-dom'
import { Col,Card,Row } from 'react-bootstrap'
import man from '../../images/man.jpeg'
import TeacherDataCard from '../../Components/Teacher/TeacherDataCard'
const TeacherData = () => {
  return (
    <div>
    <div className='admin-content-text mb-5' style={{color:"#099B93"}}>بيانات المعلم</div>
   <Row className=' justify-content-start'>
    <TeacherDataCard/>


</Row>
</div>
  )
}

export default TeacherData
