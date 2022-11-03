import React from 'react'
import { Link } from 'react-router-dom'


const OwnerSideBar = () => {
  return (
    <div className="sidebar">
    <div className="d-flex flex-column">

        <Link to="/student/allcourses" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                جميع الدورات
            </div>
        </Link>

        <Link to="/student/studentdata" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         بيانات الطالب
                    </div>
        </Link>

        <Link to="/student/quizes" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                          الاختبارات
                    </div>
        </Link>


        <Link to="/student/boughtcourses" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        الدورات المسجلة  
                    </div>
        </Link>
        
        <Link to="/student/prevpay" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         المشتريات السابقة  
                    </div>

        </Link>

    

    </div>
</div>
  )
}

export default OwnerSideBar
