import React from 'react'
import { Row } from 'react-bootstrap'
import MangerNumberOfStudentsCard from './MangerNumberOfStudentsCard'

const MangerNumberOfStudents = () => {
  return (
    <div>
     <div className='admin-content-text mb-3' style={{color:"#099B93"}}>  اجمالي عدد الطلاب : 300 طالب</div>
     <div className='admin-content-text mb-2' style={{color:"#000"}}>    بيانات الطلاب </div>
     <Row className=' justify-content-start'>

        <MangerNumberOfStudentsCard/>
        <MangerNumberOfStudentsCard/>
        <MangerNumberOfStudentsCard/>
        <MangerNumberOfStudentsCard/>
</Row>
    </div>
  )
}

export default MangerNumberOfStudents
