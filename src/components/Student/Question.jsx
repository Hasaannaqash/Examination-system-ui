import React, {  useState } from "react";


export default function Question(props) {
  const examId = localStorage.getItem("examId");
  const [errorMessage, setErrorMessage] = useState("");
  const [displayError, setDisplayError] = useState('none');

  function validate(e) {
    const answerOptions = e.target.value;
    if(isNaN(answerOptions) || answerOptions < 1 || answerOptions > 4) {
     setErrorMessage("Please enter a number between 1 and 4");
     setDisplayError('block');
    return;
    }else{
      setDisplayError('none');
    }

  const answer = {
    questionId: props.questionId,
    selectedOption: e.target.value,
    examId: examId,
    studentId: JSON.parse(localStorage.getItem("user")).user.id
  }
  props.answeres((prev) => {
    return {
      ...prev,
      [props.questionId]: answer
    };
  });
 

  }
  

    return (
      <>
        <div className="container">
          <div className="container mt-sm-5 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{props.question}</h5>
                <p className="card-text"><b>1. </b> {props.option_one}</p>
                <p className="card-text"><b>2. </b> {props.option_two}</p>
                <p className="card-text"><b>3. </b> {props.option_three}</p>
                <p className="card-text"><b>4. </b> {props.option_four}</p>
              </div>
              <div className="card-footer">
                <small>Answer: &nbsp; &nbsp;  </small>
                <input placeholder="Enter the correct option" className="form-control mb-3" type="text" min="1" max="4" onChange={validate}/>
                </div>
            </div>
          </div>
          <div style={{display: displayError}} className="alert alert-danger alert-dismissible fade show m-2" role="alert">
            <strong>Error!</strong> {errorMessage}.
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
          </div>
        </div>
      </>
    );
  }
