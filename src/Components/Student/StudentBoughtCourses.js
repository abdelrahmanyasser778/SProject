import React from 'react'
import OwnerAllCoursesIhave from './StudentBoughtCoursesCard'
import { Row } from 'react-bootstrap'
import { useEffect , useState } from 'react'
import axios from 'axios'

const OwnerAllCourses = () => {
  const token =localStorage.getItem("ACCESS_TOKEN")
  const config = {
    headers: {
        "Content-type": "application/json",
         "Authorization": `Bearer ${token}`,
    },
};

  const [data , setData] = useState([]);
  useEffect(()=>{
    axios.get('https://qudratqudratooooo.online/api/my-courses',config)
    .then(function (response) {
      setData(response.data.data)
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])

  return (
    <div>
          <div className='admin-content-text mb-5' style={{color:"#099B93"}}>الدورات المسجلة</div>
         <Row className=' justify-content-start'>
         {data.map((element)=>{
        <OwnerAllCoursesIhave img={`https://qudratqudratooooo.online/${element.thumbnail}`} name={element.title["en"]} price={element.price} key={element.id} id={element.id}/>  
      })}
 

    </Row>
    </div>
  )
}

export default OwnerAllCourses
