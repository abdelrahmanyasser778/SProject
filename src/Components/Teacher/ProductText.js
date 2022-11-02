import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect , useState } from 'react'
import axios from 'axios'

const ProductText = ({title,shortdetails,about, price ,id}) => {

const [data , setData] = useState([]);
const token = localStorage.getItem("ACCESS_TOKEN")
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};


  const ADD_TO_CART = () =>{
    
      axios.get(`https://qudratqudratooooo.online/api/add-to-cart/${id}`,config)
      .then(function (response) {
        setData(response.data.data)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text" style={{color:"#099B93",fontSize:"30px",fontWeight:"bold"}}> {title} </div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">{shortdetails}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline" style={{color:"#099B93",fontSize:"30px",fontWeight:"bold"}}> متاح لجميع الفئات العمرية</div>
          
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text" style={{color:"#099B93",fontSize:"30px",fontWeight:"bold"}}>التفاصيل :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{about}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{price} ريال</div>
          <Link to="/cart"  style={{ textDecoration: "none" }}>

          <div className="product-cart-add px-3 py-3 d-inline mx-3" onClick={()=>{ADD_TO_CART()}} style={{backgroundColor:"#099B93"}}>اضف للعربة</div>
          </Link>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText