import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ExamAction(props) {
    const navigate = useNavigate();

    function deleteExam() {
      axios.delete(`http://localhost:3000/exams/${props.id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },}
      ).then((response) => {
        // reload the changes
        window.location.reload();
      }).catch((error) => {
        console.log(error);
      }
      );
    }


    function publishExam() {
      axios.post(`http://localhost:3000/exams/${props.id}/publish`,null,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },}
        ).then((response) => {
        window.location.reload();
      }).catch((error) => {
        console.log(error.response);
      }
      );
    }
  return (
    <div className="container my-3 ">
    <div className="card">
      <div className="card-body">
      <input
        type="hidden"
        name="exam_id"
        value={props.id}
        ></input>
        {props.tittle}
        {props.isPublished === true ? (
            <button
              type="submit"
              className="btn btn-secondary mx-2 "
              id="btn"
              disabled
            >
              Published
            </button>
          ) : (
            <button
              onClick={publishExam}
              type="submit"
              className="btn btn-primary mx-2"
              id="btn"
            >
              Publish
            </button>
          )}
        <button type="submit" className="btn btn-danger mx-2" id="btn" onClick={deleteExam}>
          Delete
        </button>
        <button
          onClick={() => {
            localStorage.setItem("examId", props.id);
         navigate("/lecture/examForm");
          }}
          type="submit"
          className="btn btn-success mx-2"
          id="btn"
        >
          Add Question
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
         <b>Exam Duration: </b> {props.examDuration}
        </small>
        </div>
    </div>
  </div>
  )
}
