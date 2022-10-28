import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import ImgLogo from '../images/mylogo.jpg'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'

const Footer = () => {
  return (
    <div className="footer-background footer pt-2" style={{ backgroundColor:"#099B93" }}>
    <Container className="">
            <Row className>
                    <Col>
                    <div className='d-flex justify-content-around'>
                    <img src={ImgLogo} width="50px" className='py-2'/>
                    <p className='footerText'>جميع الحقوق محفوظة&copy;2022</p>
                    <div className='d-flex justify-content-around'>
                    
                    <img src={twitter} width="35px" height="35px" className='mt-2'/>
                    <img src={instagram} width="35px" height="35px" className='mt-2'/>
                    <img src={facebook} width="35px" height="35px" className='mt-2'/>
                    </div>
                    </div>
                   
                    </Col>
                 


            </Row>
    </Container>
</div>
  )
}

export default Footer
