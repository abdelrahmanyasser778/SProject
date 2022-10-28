import React from 'react'
import OwnerAllCoursesIhave from './StudentBoughtCoursesCard'
import { Row } from 'react-bootstrap'

const OwnerAllCourses = () => {
  return (
    <div>
          <div className='admin-content-text mb-5' style={{color:"#099B93"}}>الدورات المسجلة</div>
         <Row className=' justify-content-start'>
        <OwnerAllCoursesIhave/>  
        <OwnerAllCoursesIhave/>  
        <OwnerAllCoursesIhave/>  
 

    </Row>
    </div>
  )
}

export default OwnerAllCourses
