import React from 'react'
import { Row } from 'react-bootstrap'

import OwnerAllStudentCard from './StudentDataCard'

const OwnerAllStudents = ({name ,email, phone, image ,location}) => {
  return (
    <div>
          <div className='admin-content-text mb-5' style={{color:"#099B93"}}>بيانات الطالب</div>
         <Row className=' justify-content-start'>
        <OwnerAllStudentCard name={name} email={email} phone={phone} image={image} location={location}/>

    
    </Row>
    </div>
  )
}

export default OwnerAllStudents
