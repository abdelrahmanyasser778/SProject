import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Teacher/TeacherSideBar'
import AdminAllProducts from '../../Components/Teacher/TeacherMangeCourse'

import TeacherOrderDetails from '../../Components/Teacher/TeacherOrderDetails'
const AdminOrderDetalisPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
      
        <Container>
            <TeacherOrderDetails/>

           
        </Container>
    </div>
    )
}

export default AdminOrderDetalisPage
