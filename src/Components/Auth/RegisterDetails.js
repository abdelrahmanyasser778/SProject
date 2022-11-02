import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
const RegisterDetails = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confpass,setConfpass] = useState("");
    const [phone,setPhone] = useState("");

    const REGISTER =()=>{
        axios.post('https://qudratqudratooooo.online/api/signup', {
            name,
            email,
            phone,
            password,
            confpass
          })
          .then(function (response) {
            console.log(response);
            // window.location.replace("http://localhost:3000/login");
          })
          .catch(function (error) {
            console.log("error bad credentials");
          });
        
    }
  return (
    <div style={{backgroundColor: "#f1f1f1" }}>
          <Container style={{ minHeight: "568px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
              placeholder="اسم المستخدم..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
              onChange={(e)=>{setName(e.target.value)}}
              value={name}
            />

            <input
              placeholder="الايميل..."
              type="text"
              className="user-input my-3 text-center mx-auto"
              onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
            />

            <input
              placeholder="رقم الهاتف..."
              type="text"
              className="user-input my-3 text-center mx-auto"
              onChange={(e)=>{setPhone(e.target.value)}}
              value={phone}
            />
            <input
              placeholder="كلمه السر..."
              type="password"
              className="user-input text-center mx-auto"
              onChange={(e)=>{setPassword(e.target.value)}}
              value={password}
            />
            <input
              placeholder="تأكيد كلمه السر ..."
              type="password"
              className="user-input text-center mx-auto"
              onChange={(e)=>{setConfpass(e.target.value)}}
              value={confpass}
            />
            
            
            <button className="btn-login mx-auto mt-4" onClick={()=>{REGISTER()}}>تسجيل الحساب</button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" ,color:"#099B93"}} >
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RegisterDetails
