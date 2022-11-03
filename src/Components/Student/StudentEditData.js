import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

const StudentEditData = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    const [address , setAddress] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const token =localStorage.getItem("ACCESS_TOKEN")
  const config = {
    headers: {
         "Authorization": `Bearer ${token}`,
    },
};
    const submit =()=>{
        axios.post('https://qudratqudratooooo.online/api/update-profile', {
            name:name,
            email:email,
            language:1,
            phone:phone,
            address:address
          },config)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
  return (
    <Container style={{minHeight:"568px"}}>

       <Row className="justify-content-start ">
        <div className="admin-content-text pb-4 mt-3">   تعديل البيانات</div>
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
              <div className="admin-content-text pb-4 mt-3">   تعديل الصورة</div>
                                <form>
                                <input
                                    type="file"
                                    name="myImage"
                                    onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]);
                                    }}
                                />
                </form>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={()=>{submit()}} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
    </Container>
    
  )
}

export default StudentEditData
