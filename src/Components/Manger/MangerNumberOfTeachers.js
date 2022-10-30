import React from 'react'
import { Row } from 'react-bootstrap'
import MangerNumberOfTeachersCard from '../Manger/MangerNumberOfTeachersCard'
const MangerNumberOfTeachers = () => {
  return (
    <div>
     <div className='admin-content-text mb-3' style={{color:"#099B93"}}>  اجمالي عدد المعلمين : 300 طالب</div>
     <div className='admin-content-text mb-2' style={{color:"#000"}}>    بيانات المعلمين </div>
     <Row className=' justify-content-start'>

    <MangerNumberOfTeachersCard/>
    <MangerNumberOfTeachersCard/>
    <MangerNumberOfTeachersCard/>
    <MangerNumberOfTeachersCard/>
    <MangerNumberOfTeachersCard/>
    </Row>
    </div>
  )
}

export default MangerNumberOfTeachers
