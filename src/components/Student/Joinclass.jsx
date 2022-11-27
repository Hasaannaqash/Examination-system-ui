import React from "react";
import { useNavigate } from "react-router-dom";

export default function Jionclass() {
  const navigate = useNavigate();
  return (
    <div className="sticky">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end my-2">

         <button
              onClick={() => {
                navigate("/student/popUpClass");
              }}
              type="button"
              className="btn btn-primary mx-2"
              id="btn"
            >
             Join Class
            </button>



      </div>
    </div>
  );
}

