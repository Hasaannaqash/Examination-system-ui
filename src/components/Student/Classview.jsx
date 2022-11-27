import React from "react";
import { useNavigate } from "react-router-dom";


export default function Classview(props) {
  const navigate = useNavigate();
  console.log(props);
  return (
      <>
        <div className="col-sm-6 my-2">
          <div className="card border-primary">
            <div className="card-body text-center" style={{color:"grey"}}>
              <h4 className="card-title">{props.tittle}</h4>
              <p className="card-text">{props.description}</p>

              <div class="text-center ">
                <button
                  onClick={() => {
                    localStorage.setItem("classId", props.classId);
                    navigate("/student/viewExamList");
                  }}
                  type="button"
                  className="btn btn-danger mx-2"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row"> */}

        {/* </div> */}
  
    </>
  );
}
