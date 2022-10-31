import React from 'react'
import { Link } from 'react-router-dom'
import { Col,Card,Row } from 'react-bootstrap'
const MangerNumberOfTeachersCard = () => {
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
    <Card
        className="my-2"
        style={{
            width: "80%",
            height: "130px",
            borderRadius: "8px",
            border: "none",
            
            backgroundColor: "#099B93",
        }}>

     
           
            <Card.Body>
                <Card.Title>
                <div className='d-flex'>

                    <div className="card-title"  style={{color:"#fff"}}>
                     اسم المعلم : {" "}
                    </div>
                    <div className="card-title"  style={{color:"#fff"}}>
                        عبدالرحمن ياسر  {" "}
                    </div>
                    
                </div>
                <div className='d-flex'>

                    <div className="card-title"  style={{color:"#fff"}}>
                       رقم  المعلم :  {" "}
                    </div>
                    <div className="card-title"  style={{color:"#fff"}}>
                        953159432   {" "}
                    </div>

                    </div>

                    <div className='d-flex'>

                    <div className="card-title"  style={{color:"#fff"}}>
                      العنوان :  {" "}
                    </div>
                    <div className="card-title"  style={{color:"#fff"}}>
                          الرياض  {" "}
                    </div>

                    </div>
                </Card.Title>
                <Card.Text>
               
                    <div className="d-flex justify-content-between mt-5">
                        
                       
                            <div className="card-price" style={{color:"#fff"}}>2555</div>
                            <div className="card-currency" style={{color:"#fff"}}>دورة</div>
                        
                    </div>
                </Card.Text>
            </Card.Body>
   
    </Card>
</Col>
  )
}

export default MangerNumberOfTeachersCard
