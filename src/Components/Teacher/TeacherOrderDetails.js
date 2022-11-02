import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'
import { useEffect , useState } from 'react'
import axios from 'axios'

const AdminOrderDetalis = () => {
    const id = useParams();
    const [data , setData] = useState(null);
    
    useEffect(()=>{
        axios.get(`https://qudratqudratooooo.online/api/get-course-details/${id.id}`)
        .then(function (response) {
          setData(response.data.data)
         console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error)
        });
      },[id])

      console.log(data)

    return (
        <div>
          
        <Row className='py-3'>
            <Col lg="4">
                {data&&<ProductGallery img={data.image} />}
            </Col>

            <Col lg="8">

                   {data &&<ProductText  title={data.title.en} shortdetails={data.slug} about={data.about.en} price={data.price} id={id.id}/>}
            </Col>
        </Row>
    </div>
    )
}

export default AdminOrderDetalis
