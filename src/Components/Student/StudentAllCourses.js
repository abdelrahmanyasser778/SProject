import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import StudentAllCoursesCard from './StudentAllCoursesCard'
import axios from 'axios'
import OwnerAllCoursesCard from './StudentAllCoursesCard'
import { useEffect , useState } from 'react'

const OwnerAllData = () => {
  const [data , setData] = useState([]);
  useEffect(()=>{
    axios.get('https://qudratqudratooooo.online/api/get-all-courses')
    .then(function (response) {
      setData(response.data.data)
      console.log(response.data.data)
    })
    .catch(function (error) {
      console.log(error)
    });
  },[])

  
  return (
    <div >
    <div className='admin-content-text mb-3' style={{color:"#099B93"}}> جميع الدورات</div>
    <input  type="text" className='form-control mb-2' placeholder='ابحث..'/>
    <Row className=' justify-content-start'>
      {data.map((element)=>{
        return <OwnerAllCoursesCard img={`https://qudratqudratooooo.online/${element.thumbnail}`} name={element.title["en"]} price={element.price} key={element.id} id={element.id} />
      })}

        
        
    </Row>
    
</div>
  )
}

export default OwnerAllData
