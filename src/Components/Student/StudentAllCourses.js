import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import StudentAllCoursesCard from './StudentAllCoursesCard'


const OwnerAllData = () => {
  return (
    <div >
    <div className='admin-content-text mb-5' style={{color:"#099B93"}}> جميع الدورات</div>
    <Row className=' justify-content-start'>

        <StudentAllCoursesCard/>
        <StudentAllCoursesCard/>
        <StudentAllCoursesCard/>
        <StudentAllCoursesCard/>
        <StudentAllCoursesCard/>
        <StudentAllCoursesCard/>
        <StudentAllCoursesCard/>
        <StudentAllCoursesCard/>
        <StudentAllCoursesCard/>
    </Row>
    
</div>
  )
}

export default OwnerAllData
