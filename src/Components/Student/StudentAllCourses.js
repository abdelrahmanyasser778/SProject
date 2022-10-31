import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import OwnerAllCoursesCard from './StudentAllCoursesCard'
import { useState , useEffect } from 'react'
import axios from 'axios'

const OwnerAllData = () => {
  const [data , setData] = useState([]);
  useEffect(()=>{
    axios.get('https://lms.elingua.co/api/get-all-courses')
    .then(function (response) {
      setData(response.data.data)
      console.log(response.data.data)
    })
    .catch(function (error) {
      console.log("error bad credentials");
    });
  },[])

  
  return (
    <div >
    <div className='admin-content-text mb-5' style={{color:"#099B93"}}> جميع الدورات</div>
    <Row className=' justify-content-start'>
      {data.map((element)=>{
        return <OwnerAllCoursesCard img={`https://lms.elingua.co/${element.thumbnail}`} name={element.title["en"]} price={element.price} key={element.id} />
      })}

        
        
    </Row>
    
</div>
  )
}

export default OwnerAllData
