import React from "react";
import Navbar from "../../components/Student/Navbar";
import "../../components/Student/layout.css";
import Question from "../../components/Student/Question";
import { useState, useEffect } from "react";
import axios from "axios";
export default function ExamLayout() {
  const [questions, setQuestions] = useState([]);
  const [answeres, setAnsweres] = useState([]);
   const examId = localStorage.getItem("examId");
  const getQuestions = () => {
    axios
      .get(`http://localhost:3000/exams/${examId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  useEffect(() => {
    getQuestions();
  }, []);



  return (
    <>
      <Navbar />
      {questions.map((question) => (
        <Question
          questionId={question.id}
          question={question.description}
          option_one={question.optionOne}
          option_two={question.optionTwo}
          option_three={question.optionThree}
          option_four={question.optionFour}
          marks={question.marks}
          answeres={setAnsweres}
        />
      ))}

      <button id="btn" type="button" className="btn btn-warning mx-2 my-2 btn-lg"
         onClick={() => {
     
         
          if(questions.length == Object.keys(answeres).length){
            axios
            .post(`http://localhost:3000/answeres`, answeres, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
              },
            })
            .then((response) => {
              console.log(response.data);
              alert("Exam Submitted Successfully");
              window.location.href = "/student/home";
            })
            .catch((error) => {
              console.log(error);
            });

          }else{
            alert("Please answer all questions");
          }
        }}  
      >
        SUBMIT
     
      </button>
    </>
  );
}