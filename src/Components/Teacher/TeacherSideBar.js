import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">

                <Link to="/teacher/mangecourses" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اداره الدورات
                    </div>
                </Link>



                <Link to="/teacher/addcourse" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اضف دورة جديدة
                    </div>
                </Link>

                <Link to="/teacher/addstudent" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اضف  طالب جديد
                    </div>
                </Link>
                <Link to="/teacher/showgrade/:id" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اعرض درجات الطالب
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AdminSideBar
