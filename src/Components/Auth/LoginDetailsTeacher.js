import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const LoginDetailsTeacher = () => {
  return (
    <div style={{backgroundColor: "#f1f1f1" }}>
    <Container style={{ minHeight: "568px" }}>
              <Row className="py-5 d-flex justify-content-center ">
                  <Col sm="12" className="d-flex flex-column ">
                      <label className="mx-auto title-login">تسجيل الدخول (معلم)</label>
                      <input
                          placeholder="الايميل..."
                          type="text"
                          className="user-input my-3 text-center mx-auto"
                      />
                      <input
                          placeholder="كلمه السر..."
                          type="password"
                          className="user-input text-center mx-auto"
                      />
                      <button className="btn-login mx-auto mt-4">تسجيل الدخول</button>


                      <label className="mx-auto my-4">
                          ليس لديك حساب ؟{" "}
                          <Link to="/registerteacher" style={{textDecoration:'none'}}>
                              <span style={{ cursor: "pointer",color:"#099B93" }} >
                                  اضغط هنا
                              </span>
                          </Link>
                      </label>

                      <Link to="/teacher/mangecourses" style={{textDecoration:"none"}}>
                         <span style={{cursor:"pointer",color:"#099B93"}}>
                      الدخول معلم
                               </span>
                               </Link>





                  </Col>



              </Row>
          </Container>
  </div>
  )
}

export default LoginDetailsTeacher
