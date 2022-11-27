import "./login.css";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: " ",
    password: " ",
  });

  const [error, setError] = useState("");
  const [visiblitity,setvisiblitity]=useState("none")

  function onTextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  // let history = useNavigate();
  // const [check, setCheck] = useState(false);

   function handleLogin() {
     axios
      .post("http://localhost:3000/authentication/log-in", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        localStorage.setItem("jwt_token", response?.data?.jwt_token?.access_token); 
        localStorage.setItem('role', response?.data?.user?.role);
        if (response?.data?.user?.role === "instructor") {
          localStorage.setItem("user", JSON.stringify(response.data));
          setTimeout(() => {
            
          }, 1000);
          navigate("/lecturer/home");
        }
        if (response?.data?.user?.role === "student") {
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/student/home");
        }
      }).catch((error) => {
        if (error.response.status === 400) {
          setError("Invalid email or password");
          setvisiblitity("block")
        } else {
          setError("Something went wrong please try again");
          setvisiblitity("block")
        }
      }
      );
  }

  return (
    <div className="text-center">
      <main className="form-signin w-100 m-auto">
        <div>
        <img className="mb-4" src="https://cdn-icons-png.flaticon.com/512/3246/3246356.png" alt="" width={130} height={130} />
          <h1 className="text-uppercase text-center mb-4">Please sign in</h1>

          <div className="form-floating">
            <input
              name="email"
              onChange={(e) => onTextFieldChange(e)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating">
            <input
              name="password"
              onChange={(e) => onTextFieldChange(e)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="password"
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            className="w-100 btn btn-lg btn-success"
            onClick={handleLogin}
          >
            Sign in
          </button>

          <div style={{display: visiblitity}} className="alert alert-danger alert-dismissible fade show m-2" role="alert">
            <strong>Error!</strong> {error}.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>


          <p className="text-center text-muted mt-5 mb-0">
            {" "}
            Create a account here{" "}
            <Link to="/registration" className="fw-bold text-body">
              <u>Register Here </u>
            </Link>
          </p>
        </div>
      </main>
      <p class="mt-5 mb-3 text-muted">&copy; Developed By Hasaan Naqash</p>
    </div>
  );
}
