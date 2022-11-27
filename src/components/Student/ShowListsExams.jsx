import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShowListsExams(props) {

  const navigate = useNavigate();
  return (
    <>
      <div className="container my-3 ">
        <div className="card">
          <div className="card-body">
            {props.name}
            <button
              onClick={() => {
                localStorage.setItem("examId", props.examId);
                navigate("/student/examLayout");
              }}
              type="button"
              className="btn btn-danger mx-2"
              id="btn"
            >
              Go To Exam
            </button>
          </div>
          <div className="card-footer">
        <small className="text-muted">
        <b>Description</b>  {props.description}
          <br />
        <b>Date: </b>  {props.examDate.slice(0,10)}
          <br />
         <b>Pass Mark:</b> {props.passMark}
          <br />
         <b>Exam Duration: </b> {props.duration}<br />
         <b>Status: </b> <b style={{color:"red"}}>{props.status}</b>
        </small>
        </div> 
        </div>
      </div>
    </>
  );
}
