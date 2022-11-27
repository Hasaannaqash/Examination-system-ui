import axios from "axios";
import React, { useState } from "react";
import Navdev from "./Navdev";
import { useNavigate } from "react-router-dom";

export default function CreatingClass() {
  const [classData, setClassData] = useState({
    name: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [visiblitity, setvisiblitity] = useState("none")
  const navigate = useNavigate();

  function onInputChange(e) {
    setClassData({
      ...classData,
      [e.target.name]: e.target.value,
    });
  }

  async function createClass() {
    const user = JSON.parse(localStorage.getItem("user"));
    const newClass = {
      name: classData.name,
      description: classData.description,
      instructorId: user.id,
    };

    await axios.post("http://localhost:3000/classes", newClass, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    }).then((response) => {
      setvisiblitity("none")
      navigate("/lecturer/home");
       
    }
    ).catch((error) => {
      if (error.response.status === 400) {
        if (Array.isArray(error.response.data.message)) {
          setError(error.response.data.message[0]);
        } else {
          setError("Something went wrong please try again");
        }
        setvisiblitity("block")
      }
    }
    )
  }

  return (
    <>
      <Navdev />

      <div className="container my-3">
        <div className="mb-3">
          <h5> Create Class </h5>

          <label htmlFor="enterQuestion" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter class name"
            onChange={onInputChange}
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
            placeholder="Enter description"
            onChange={onInputChange}
          />
        </div>

        <div>
          <button
            onClick={() => createClass()}
            type="submit"
            className="btn btn-primary mx-2"
          >
            Create New Class
          </button>
        </div>
        <div style={{ display: visiblitity }} class="alert alert-danger alert-dismissible fade show m-2" role="alert">
          <strong>Error!</strong> {error}.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </>
  );
}
