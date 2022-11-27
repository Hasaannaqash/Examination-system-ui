import React from "react";
import Classlist from "../../components/Lecturer/Classlist";
import Navdev from "../../components/Lecturer/Navdev";
import Createclass from "../../components/Lecturer/Createclass";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Lecturerhome() {
const [classes, setClasses] = useState([]);
 const getClasses = () => {
    axios
      .get("http://localhost:3000/classes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((response) => {
        // reverse the array to show the latest class first
        setClasses(response.data.reverse());
      }).catch((error) => {
      }
      );
  };
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div>
      <Navdev />
      <Createclass />
      <Classlist classes={classes} />
    </div>
  );
}
