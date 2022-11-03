
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartCheckout from '../Components/Cart/CartCheckout'
import CartItem from '../Components/Cart/CartItem'
import { useEffect , useState } from 'react'
import axios from 'axios'



const CartPage = () => {
let total_cost =0
    const [data , setData] = useState([]);
const token = localStorage.getItem("ACCESS_TOKEN")
  const config = {
  headers: { Authorization: `Bearer ${token}` }
};

  useEffect(()=>{
    axios.get('https://qudratqudratooooo.online/api/cart-list',config)
    .then(function (response) {
      setData(response.data.data)
      console.log(response.data.data)
    })
    .catch(function (error) {
      console.log(error)
    });
  },[])

const deleteItem = (id) =>{
    console.log(id)
    let temparr = data.filter((element)=>{
        return element.id != id;
    })

    setData(temparr);

}
    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                   {data && data.map((item)=>{ 
                    total_cost +=item.course.price
                    return (<CartItem title={item.course.title.en} shortdetails={item.course.slug} about={item.course.about.en} price={item.course.price} key={item.course.id} id={item.id} thumbnail={`https://qudratqudratooooo.online/${item.course.thumbnail}`} delfunc={deleteItem}/>)
                   })}
                    
                </Col>

                <Col xs="6" md="3">
                    <CartCheckout total={total_cost}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage