import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./customsty.css";
import axios from "axios";
import Classlist from "./Classlist";

export default function Class(props) {
  const navigate = useNavigate();

  async function deleteClass() {
    axios.delete(`http://localhost:3000/classes/${props.id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    })
      .then((response) => {
        window.location.reload();
      }
      ).catch((error) => {
        console.log(error);
      }
      );

  }

  return (
    <>
      {/* <div className="row"> */}
      <div className="col-sm-6 my-2">
        <div className="card border-primary">
          <div className="card-body" id="style">
            {/* hiden clas id */}
            <input
              type="hidden"
              name="id"
              value={props.id}
              ></input>
            <h4 className="card-title">{props.tittle}</h4>
            <p className="card-text">{props.description}</p>
            <p class="card-text">
              <small class="text-muted">{props.faculty}</small>
            </p>

            <div class="text-center ">
              <button
                type="button"
                class="btn btn-danger mx-2"
                onClick={deleteClass}
              >
                Remove
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("classId", props.id);
                  navigate("/lecturer/examList");
                }}
                type="button"
                class="btn btn-success mx-2"
              >
                View Exams
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
