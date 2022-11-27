import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function JoinClassPopUp(props) {
  const navigate = useNavigate();
  function joinClass() {
    axios.post(`http://localhost:3000/classes/${props.classId}/join`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    }
    ).then((response) => {
      console.log(response);
      navigate("/student/home");
    }
    ).catch((error) => {
      alert("Error joining class try again later");
      console.log(error);
    }
    );
  }
  return (
    <>
    
      <div className="container my-3 ">
        <div className="card">
          <div className="card-body">
            {props.JoinName}
            <button
              onClick={joinClass}
              type="button"
              className="btn btn-success mx-2"
              id="btn"
            >
              Join Class
            </button>
          </div>
          <div className="card-footer">
            {props.description}
            </div>
        </div>
      </div>
    </>
  );
}
