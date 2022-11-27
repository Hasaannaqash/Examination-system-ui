import React from "react";
import { useNavigate } from "react-router-dom";

export default function Createclass() {

  const navigate = useNavigate();

  return (
    <div className="sticky">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end my-2">
      <button
          onClick={() => {
         navigate("/lecturer/create");
          }}
          type="submit"
          className="btn btn-success mx-2"
          id="btn"
        >
        Create Class
        </button>
      </div>
    </div>
  );
}
