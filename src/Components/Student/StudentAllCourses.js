import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import OwnerAllCoursesCard from './StudentAllCoursesCard'


const OwnerAllData = () => {
  return (
    <div >
    <div className='admin-content-text mb-5' style={{color:"#099B93"}}> جميع الدورات</div>
    <Row className=' justify-content-start'>

        <OwnerAllCoursesCard/>
        <OwnerAllCoursesCard/>
        <OwnerAllCoursesCard/>
        <OwnerAllCoursesCard/>
        <OwnerAllCoursesCard/>
        <OwnerAllCoursesCard/>
        <OwnerAllCoursesCard/>
        <OwnerAllCoursesCard/>
        <OwnerAllCoursesCard/>
    </Row>
    
</div>
  )
}

export default OwnerAllData
