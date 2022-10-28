import React from 'react'
import { Row } from 'react-bootstrap'

import OwnerAllStudentCard from './StudentDataCard'

const OwnerAllStudents = () => {
  return (
    <div>
          <div className='admin-content-text mb-5' style={{color:"#099B93"}}>بيانات الطالب</div>
         <Row className=' justify-content-start'>
        <OwnerAllStudentCard/>

    
    </Row>
    </div>
  )
}

export default OwnerAllStudents
