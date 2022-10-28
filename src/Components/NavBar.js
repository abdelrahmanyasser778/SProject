import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/mylogo.jpg'
const NavBar = () => {
  return (
    <div>
            <Navbar  expand="lg" style={{backgroundColor:"#099B93"}} variant="dark">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav >
            <Nav.Link href='/allcorses' className="navColor">الدورات التدريبية</Nav.Link>
            <Nav.Link  className="navColor">مشترياتي</Nav.Link>
          
            <Nav.Link href='/login' className="navColor">تسجيل طالب</Nav.Link>
            <Nav.Link href='/loginteacher' className="navColor">تسجيل معلم</Nav.Link>

          </Nav>

        </Navbar.Collapse>
        <Navbar.Brand href='/'><img width="100px" src={logo}/></Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
