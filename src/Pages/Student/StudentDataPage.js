import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OwnerAllStudents from '../../Components/Student/StudentData'
import OwnerSideBar from '../../Components/Student/StudentSideBar'
import { useEffect , useState } from 'react'
import axios from 'axios'
const OwnerAllStudentsPage = () => {
  const token =localStorage.getItem("ACCESS_TOKEN")
  const config = {
    headers: {
        "Content-type": "application/json",
         "Authorization": `Bearer ${token}`,
    },
};    

  const [data , setData] = useState([]);
  useEffect(()=>{
    console.log(config)
    axios.get('https://qudratqudratooooo.online/api/user',{},config)
    .then(function (response) {
      setData(response.data.data)
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])

  


  return (
    <div>
         <Container style={{ minHeight: "568px" }} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <OwnerSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <OwnerAllStudents/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OwnerAllStudentsPage
