import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './TeacherMangeCoursesCard'

const AdminAllProducts = () => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الدورات</div>
            <Row className='justify-content-start'>
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
