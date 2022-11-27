import React from "react";
import Navbar from "../../components/Student/Navbar";
import ShowListsExams from "../../components/Student/ShowListsExams";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ClassExamList() {
  const [exams, setExams] = useState([]);
  const [noExamFound , setNoExamFound] = useState('none');
  const classId = JSON.parse(localStorage.getItem("classId"));
  function getExams() {
    axios
      .get(`http://localhost:3000/classes/${classId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((response) => {
        if (response.data.exams.length === 0) {
          setNoExamFound('block');
        }
        setExams(response.data.exams.reverse());
        console.log(response.data.exams);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getExams();
  }, []);

  return (
    <>
      <Navbar />

   
      

          <div style={{display: noExamFound}} className="alert alert-danger alert-dismissible fade show m-2" role="alert">
            <strong>No Exam Found!</strong> There is no exam in this class.
          </div>
     

      {exams.map((exam) => (
        <ShowListsExams
        examId={exam.id} 
        name={exam.name}
        description={exam.description}
        passMark={exam.passMark}
        status={exam.examStatus}
        examDate={exam.examDate}
        duration={exam.examDuration}
        />
      ))}
    </>
  );
}
