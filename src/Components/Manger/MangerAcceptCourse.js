import React from 'react'
import { Link } from 'react-router-dom'
import { Col,Card,Row } from 'react-bootstrap'
import prod1 from '../../images/download.jpg'
import MangerAcceptCourseCard from './MangerAcceptCourseCard'
const MangerAcceptCourse = () => {
  return (
    <div>

    <div className='admin-content-text mb-3' style={{color:"#099B93"}}>الطلبات على الدورات</div>
    <Row className=' justify-content-start'>

        <MangerAcceptCourseCard/>
        <MangerAcceptCourseCard/>
        <MangerAcceptCourseCard/>
        <MangerAcceptCourseCard/>
</Row>  
    </div>
  )
}

export default MangerAcceptCourse
