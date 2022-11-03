import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ConfirmDataPage = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    const [address , setAddress] = useState("")
    const [personalinfo , setPersonalinfo] = useState("")
    const [idnom , setIdnom] = useState("")
    const [fphone , setFphone] = useState("")

    const token =localStorage.getItem("ACCESS_TOKEN")
  const config = {
    headers: {
        "Content-type": "application/json",
         "Authorization": `Bearer ${token}`,
    },
};

    const submit =()=>{
        axios.post('https://qudratqudratooooo.online/api/make-order', {
            name,
            email,
            phone,
            address,
            personalinfo,
            idnom,
            fphone
          },config)
          .then(function (response) {
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
  return (
    <Container style={{minHeight:"568px"}}>

    <Row className="justify-content-start ">
     <div className="admin-content-text pb-4 mt-3">   اتمام البيانات </div>
     <Col sm="8">
  
         <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder="اسم الطالب"
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
         />
         <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder=" الايميل"
             onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
         />
         <input
             type="number"
             className="input-form d-block mt-3 px-3"
             placeholder="رقم  الطالب"
             onChange={(e)=>{setPhone(e.target.value)}}
            value={phone}
         />

     <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder=" العنوان"
             onChange={(e)=>{setAddress(e.target.value)}}
            value={address}
         />
              <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder=" معلومات اضافية"
             onChange={(e)=>{setPersonalinfo(e.target.value)}}
            value={personalinfo}
         />
              <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder="رقم الهوية"
             onChange={(e)=>{setIdnom(e.target.value)}}
            value={idnom}
         />

              <input
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder=" رقم ولي الامر"
             onChange={(e)=>{setFphone(e.target.value)}}
            value={fphone}
         />
          

     </Col>
 </Row>
 <Row>
     <Col sm="8" className="d-flex justify-content-end ">
        <Link to="/order/paymethod" style={{textDecoration:"none"}}>

         <button onClick={()=>{submit()}} className="btn-save d-inline mt-2 "> اتمام الشراء</button>
        </Link>
     </Col>
 </Row>
 </Container>
  )
}

export default ConfirmDataPage
