import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navdev from "./Navdev";

export default function ExamForm() {
  const [question, setQuestion] = useState({
    description: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    correctOption: null,
    marks: 1,
    examId: localStorage.getItem("examId"),
  });

  const navigate = useNavigate();


  function onInputChange(e) {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  }

  // function onChangeCorrectOption(e) {
  //   if (e.target.value >0 && e.target.value <5) {
  //     setQuestion({
  //       ...question,
  //       correctOption: question.optionOne,
  //     });
  //   }else{
  //     setQuestion({
  //       ...question,
  //       correctOption: "",
  //     });
  //     e.target.value = "";
  //     setTimeout(() => {
  //       alert("Please enter a valid option number (1-4)");
  //     }, 200);
  //   }
  //   }

  function onSubmit(e) {
    if(valadateForm()){
      e.preventDefault();
      console.log(question);
      axios
        .post("http://localhost:3000/questions", question, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        })
        .then((response) => {
          navigate("/lecturer/examList");
        })
        .catch((error) => {
          console.log(error);
        });
    }

  }

  function valadateForm(){
    console.log(question);
    if (
      question.description === "" ||
      question.optionOne === "" ||
      question.optionTwo === "" ||
      question.optionThree === "" ||
      question.optionFour === "" ||
      question.correctOption === ""
    ) {
      alert("Please fill all the fields");
      return false;
    }
    // check if the correct option is a number
    // else if (isNaN(question.correctOption)) {
    //   alert("Please enter a valid option number (1-4)");
    //   return false;
    // }
    // check if the marks is a number
    else if (isNaN(question.marks)) {
      alert("Please enter a valid number for marks");
      return false;
    }
    return true;
  }
    
  return (
    <>
          <Navdev />
    <div className="container my-3">
      <div className="mb-3">
        <h5> Add Questions </h5>

        <label htmlFor="enterQuestion" className="form-label">
          Enter Question
        </label>
        <input
          name="description"
          type="text"
          className="form-control"
          placeholder="Enter Question"
          onChange={onInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="enterQuestion" className="form-label">
          Enter Option 1
        </label>

        <input name="optionOne" type="text" className="form-control" onChange={onInputChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="enterQuestion" className="form-label">
          Enter Option 2
        </label>

        <input name="optionTwo" type="text" className="form-control" onChange={onInputChange}/>
      </div>

      <div className="mb-3">
        <label htmlFor="enterQuestion" className="form-label">
          Enter Option 3
        </label>

        <input name="optionThree" type="text" className="form-control" onChange={onInputChange}/>
      </div>

      <div className="mb-3">
        <label htmlFor="enterQuestion" className="form-label">
          Enter Option 4
        </label>

        <input name="optionFour" type="text" className="form-control" onChange={onInputChange}/>
      </div>

      <div className="mb-3">
        <label htmlFor="enterQuestion" className="form-label">
          Enter Question Answer
        </label>

        <input name="correctOption" type="number" className="form-control" onChange={onInputChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="enterQuestion" className="form-label">
          Enter Marks
        </label>
        <input name="marks" type="number" className="form-control" onChange={onInputChange}/>
      </div>

      <div>
        <button type="submit" className="btn btn-primary mx-2" onClick={onSubmit}>
          Add Question
        </button>

        <button
          onClick={() => {
            navigate("/lecturer/examList");
          }}
          type="submit"
          className="btn btn-success mx-2"
        >
          Go Back
        </button>
      </div>
    </div>
    </>
  );
}
