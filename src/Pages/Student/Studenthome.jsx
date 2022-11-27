import axios from "axios";
import React, { useEffect, useState } from "react";
import Jionclass from "../../components/Student/Joinclass";
import JoinClassList from "../../components/Student/JoinClassList";
import Navbar from "../../components/Student/Navbar";

export default function Studenthome() {
  const [classes, setClasses] = useState([]);
  const id = JSON.parse(localStorage.getItem("user")).user.id;
  const getClasses = () => {
    axios
      .get(`http://localhost:3000/classes/student/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((response) => {
        // reverse the array to show the latest class first
        setClasses(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div>
      <Navbar />
      <Jionclass />
      <JoinClassList classes={classes} />
    </div>
  );
}
