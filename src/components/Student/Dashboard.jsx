import React from "react";
import ExamTable from "./table/ExamTable";

export default function Dashboard(props) {
  return (
    <>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-2 g-2">
          <div className="col">
            <div
              className="card text-bg-light mb-3"
              style={{ height: "35rem" }}
            >
              <div className="card-body">
                <h3 className="card-title text-center">Dashboard</h3>
                <div className="text-center img-fluid ">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                    style={{ width: "max-width: 100%;", height: "180px" }}
                    alt=""
                  />
                </div>

                <div className="card-body">
                  <h4 className="card-text my-3 text-center">
                    Welcome {props.name}
                  </h4>

                  <p className="card-text">
                    <b>Faculty</b> {props.course}
                  </p>
                  <p className="card-text">
                    {" "}
                    <b>Email</b> {props.email}
                  </p>
                  <p className="card-text">
                    {" "}
                    <b>Role</b> {props.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h4
                  className="card-title text-center"
                  style={{ padding: "10px" }}
                >
                  Performance Chart{" "}
                </h4>

                <ExamTable />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p class="mt-5 mb-3 text-muted text-center">&copy; Developed By Hasaan Naqash</p>
        </footer>
      </div>
    </>
  );
}
