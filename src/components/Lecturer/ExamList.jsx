import React from "react";
import Navdev from "./Navdev";
import "./customsty.css";
import ExamAction from "./ExamAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ExamList() {

  const navigate = useNavigate();
  const classId = localStorage.getItem("classId");

  const [exams, setExams] = useState([]);
  const getExams = () => {
     axios
       .get(`http://localhost:3000/classes/${classId}/exams`, {
         headers: {
           Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
         },
       })
       .then((response) => {
         // reverse the array to show the latest class first
         setExams(response?.data?.exams?.reverse());
       }).catch((error) => {
       }
       );
   };
   useEffect(() => {
    getExams();
   }, []);

  return (
    <>
      <Navdev />
      <div>
      <button
          onClick={() => {
         navigate("/lecturer/newExam");
          }}
          type="submit"
          className="btn btn-primary mx-2 my-3"
          id="btn"
        >
          New Exam 
        </button>
        </div>
        <div className="mt-5">
{
  exams.map((exam)=>(
    console.log('exam pu : => ', exam.published),
    <ExamAction 
    tittle={exam.name}
    isPublished={exam.published}
    description={exam.description}
    examDate={exam.examDate}
    passMark={exam.passMark}
    examDuration={exam.examDuration}
    id={exam.id}
    />
  ))}
     </div>
    </>
  );

}
