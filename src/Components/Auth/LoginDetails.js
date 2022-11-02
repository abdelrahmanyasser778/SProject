import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
const LoginDetails = () => {

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

    const LOGIN =()=>{
        axios.post('https://qudratqudratooooo.online/api/login', {
            email,
            password
          })
          .then(function (response) {
            console.log(response);
            localStorage.setItem("ACCESS_TOKEN",response.data.data.access_token);
            window.location.replace("http://localhost:3000/student/allcourses");
          })
          .catch(function (error) {
            console.log("error bad credentials");
          });
        
    }
  return (

    <div style={{backgroundColor: "#f1f1f1" }}>
      <Container style={{ minHeight: "568px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">تسجيل الدخول (طالب)</label>
                        <input
                            placeholder="الايميل..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                            onChange={(e) =>{setemail(e.target.value)}}
                            value={email}
                        />
                        <input
                            placeholder="كلمه السر..."
                            type="password"
                            className="user-input text-center mx-auto"
                            onChange={(e) =>{setpassword(e.target.value)}}
                            value={password}
                        />

                        <button className="btn-login mx-auto mt-4" onClick={()=>{LOGIN()}}>تسجيل الدخول</button>


                        <label className="mx-auto my-4">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer",color:"#099B93" }} >
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>



                                 <Link to="/student/allcourses" style={{textDecoration:"none"}}>
                                    <span style={{cursor:"pointer",color:"#099B93"}}>
                                الدخول طالب
                                 </span>
                                 </Link>

                                 <Link to="/manger/allstudents" style={{textDecoration:"none"}}>
                                    <span style={{cursor:"pointer",color:"#099B93"}}>
                                الدخول مدير
                                 </span>
                                 </Link>






                    </Col>



                </Row>
            </Container>
    </div>
  )
}

export default LoginDetails
