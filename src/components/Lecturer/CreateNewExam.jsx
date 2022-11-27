import React from "react";
import { useNavigate } from "react-router-dom";
import Navdev from "./Navdev";
import axios from "axios";

import { useState } from "react";

export default function CreateNewExam() {
  const classId = localStorage.getItem("classId");
  const navigate = useNavigate();

  const [exam, setExam] = useState({
    name: "",
    description: "",
    examStatus: "On-time",
    examDate: null ,
    examDuration: 0,
    passMark: 0,
    classId: classId,
  });


  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/exams", exam, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((response) => {
        navigate("/lecturer/examList", {state: {classId: classId}});
      })
      .catch((error) => {});
  }

  function handleOnChange(e) {
    setExam({
      ...exam,
      [e.target.name]: e.target.value,
    });
  }


  return (
    <>
      <Navdev />

      <div className="container my-4">
        <div className="mb-3">
          <h5> Create New Exam </h5>

          <label htmlFor="enterQuestion" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="enterQuestion" className="form-label">
            Description
          </label>

          <input
            name="description"
            type="text"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="enterQuestion" className="form-label">
            Exam Status
          </label>

          <select
            name="examStatus"
            className="form-select"
            onChange={handleOnChange}
          >
            <option value="On-time" disabled>Select Exam Status</option>
            <option value="On-time">On-time</option>
          </select>

        </div>

        <div className="mb-3">
          <label htmlFor="enterQuestion" className="form-label">
            Exam Date
          </label>

          <input
            name="examDate"
            type="date"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="enterQuestion" className="form-label">
            Passing Mark
          </label>

          <input
            name="passMark"
            type="number"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="enterQuestion" className="form-label">
            Exam Duration
          </label>

          <input
            name="examDuration"
            type="number"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-outline-success my-2 mx-2"
            onClick={handleOnSubmit}
          >
            Create New Exam
          </button>
        </div>
      </div>
    </>
  );
}
