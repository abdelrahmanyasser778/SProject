import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'

import StudentAllQuizesCard from './StudentAllQuizesCard'
const StudentAllQuizes = () => {
  return (
    <div >
    <div className='admin-content-text mb-3' style={{color:"#099B93"}}> جميع الدورات</div>
   
    <Row className=' justify-content-start'>
    
       <StudentAllQuizesCard/>
      

        
        
    </Row>
    
</div>
  )
}

export default StudentAllQuizes
