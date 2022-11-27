import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/student/home">
          {" "}
          Student's Dashboard{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/student/home"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/student/profile" className="nav-link" href="/">
                Profile
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button
              onClick={() => {
                navigate("/");
                localStorage.clear();
              }}
              type="button"
              className="btn btn-dark mx-2"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
