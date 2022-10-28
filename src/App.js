import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPage from "./Pages/AllPage";

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

import TeacherMangeCoursesPage from "./Pages/Teacher/TeacherMangeCoursesPage";

import TeacherOrderDetailsPage from "./Pages/Teacher/TeacherOrderDetailsPage";




import TeacherAddCoursePage from "./Pages/Teacher/TeacherAddCoursePage";
import StudentAllCoursesPage from "./Pages/Student/StudentAllCoursesPage";


import StudentDataPage from "./Pages/Student/StudentDataPage";

import StudentBoughtCoursesPage from "./Pages/Student/StudentBoughtCoursesPage";


import LoginTeacherPage from "./Pages/LoginTeacherPage";
import RegisterTeacherPage from "./Pages/RegisterTeacherPage";
import TeacherAddStudentPage from "./Pages/Teacher/TeacherAddStudentPage";
import TeacherShowGradePage from "./Pages/Teacher/TeacherShowGradePage";
import AllCorsesPage from "./Pages/AllCorsesPage";
import CartPage from "./Pages/CartPage";
import ChoosePayMethoud from "./Pages/ChoosePayMethoud";

function App() {
  return (
    <div className="App" >
       <NavBar/>
       <BrowserRouter>
          <Routes>
        <Route index element={<AllPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/loginteacher" element={<LoginTeacherPage/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registerteacher" element={<RegisterTeacherPage />} />


        <Route path="/teacher/mangecourses" element={<TeacherMangeCoursesPage/>}/>
        <Route path="/teacher/addstudent" element={<TeacherAddStudentPage/>}/>
        <Route path="/teacher/addcourse" element={<TeacherAddCoursePage/>}/>
        <Route path ="/teacher/showgrade/:id" element ={<TeacherShowGradePage/>}/>

        <Route path="/course/:id" element={<TeacherOrderDetailsPage/>}/>
      
      
        <Route path="/student/allcourses" element={<StudentAllCoursesPage/>}/>
        <Route path="/student/studentdata" element={<StudentDataPage/>}/>
        
        <Route path="/student/boughtcourses" element={<StudentBoughtCoursesPage/>}/>
        <Route path="/allcorses" element={<AllCorsesPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/order/paymethod" element={<ChoosePayMethoud/>}/>
          </Routes>
       </BrowserRouter>
       
       <Footer/>
    </div>
  );
}

export default App;
