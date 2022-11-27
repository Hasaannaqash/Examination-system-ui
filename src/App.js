import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//---------------------------->IMPORTS FOR COMPONENTS---------------------------->
import Login from "./components/SignIn/SignIn";
import Registration from "./components/Registration/Registration";
import Lecturerhome from "./Pages/Lecturer/Lecturerhome";
import Studenthome from "./Pages/Student/Studenthome";
import ExamForm from "./components/Lecturer/ExamForm";
import ExamList from "./components/Lecturer/ExamList";
import CreatingClass from "./components/Lecturer/CreatingClass";
import ExamLayout from "./Pages/Student/ExamLayout";
import ClassExamList from "./Pages/Student/ClassExamList";
import ProfileView from "./Pages/Student/ProfileView";
import NotFound from "./components/NotFound";
import JoinClassLayout from "./Pages/Student/JoinClassLayout";
import CreateNewExam from "./components/Lecturer/CreateNewExam";


function App() {
  // if route not found, redirect to root

  if (localStorage.getItem("role") === "student" && localStorage.getItem("jwt_token") !== null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/student/home" element={<Studenthome />}></Route>
          <Route path="/student/examLayout" element={<ExamLayout />}></Route>
          <Route path="/student/viewExamList" element={<ClassExamList />}></Route>
          <Route path="/student/profile" element={<ProfileView />}></Route>
          <Route path="/student/popUpClass" element={<JoinClassLayout />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
  if (localStorage.getItem("role") === "instructor" && localStorage.getItem("jwt_token") !== null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/lecturer/home" element={<Lecturerhome />}></Route>
          <Route path="/lecture/examForm" element={<ExamForm />}></Route>
          <Route path="/lecturer/examList" element={<ExamList />}></Route>
          <Route path="/lecturer/create" element={<CreatingClass />}></Route>
          <Route path="/lecturer/newExam" element={<CreateNewExam />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {localStorage.clear()}
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
