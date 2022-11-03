import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import Pagination from '../../Components/PaginateIt'

const StudentQuizPage = () => {
  return (
    <Container style={{minHeight:"568px"}}>
    <div className="admin-content-text pt-5">  اختبار القدرات</div>
    <div className="user-address-card-quiz my-3 px-3">
       
          
            <div className="admin-content-text mb-3">   السؤال الاول</div>
           

                <div className='mb-3'>
                <input
                    name="group"
                    id="group1"
                    type="radio"
                    value="الدفع عن طريق الفيزا"
                    className=""
                />
                <label className="mx-2" for="group1">
                     الاجابة   
                </label>
                </div>
                <div className='mb-3'>
                <input
                    name="group"
                    id="group1"
                    type="radio"
                    value="الدفع عن طريق الفيزا"
                    className=""
                />
                <label className="mx-2" for="group1">
                     الاجابة الاولى   
                </label>
                </div>
                <div className='mb-3'>
                <input
                    name="group"
                    id="group1"
                    type="radio"
                    value="الدفع عن طريق الفيزا"
                    className=""
                />
                <label className="mx-2" for="group1">
                    الاجابة الثانية    
                </label>
                </div>
                <div className='mb-5'>
                <input
                    name="group"
                    id="group1"
                    type="radio"
                    value="الدفع عن طريق الفيزا"
                    className=""
                />
                <label className="mx-2" for="group1">
                        الاجابة الثالثة
                </label>
                </div>

              <Pagination/>



                
                
         
            
                
            
        


    </div>


    </Container>
  )
}

export default StudentQuizPage
