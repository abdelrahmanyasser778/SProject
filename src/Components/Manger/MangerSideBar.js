import React from 'react'
import { Link } from 'react-router-dom'
const MangerSideBar = () => {
    return (
        <div className="sidebar">
        <div className="d-flex flex-column">
    
            <Link to="/manger/allstudents" style={{ textDecoration: 'none' }}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                     عدد الطلاب
                </div>
            </Link>
    
            <Link to="/manger/allteachers" style={{ textDecoration: 'none' }}>
                        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                              عدد المعلمين
                        </div>
            </Link>
    
    
    
            <Link to="/manger/acceptcourse" style={{ textDecoration: 'none' }}>
                        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                            تأكيد الدورة   
                        </div>
            </Link>
            

    
        
    
        </div>
    </div>
      )
}

export default MangerSideBar
