import React from 'react'
import JoinClassPopUp from '../../components/Student/JoinClassPopUp';
import Navbar from '../../components/Student/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function JoinClassLayout() {
 
  const [classes, setClasses] = useState([]);
  function getClasses() {
    axios
      .get(`http://localhost:3000/classes/all/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((response) => {
        // reverse the array to show the latest class first
        setClasses(response.data.reverse());
        console.log(response);
      })
      .catch((error) => {});
  }
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <>
<Navbar />

<div className='container my-2 '>
  <h5>List of Classes</h5>
</div>

{classes.map((classes) => (
        <JoinClassPopUp 
        classId={classes.id}
        JoinName={classes.name} 
        description={classes.description}
        />
      ))}
    
    </>
  )
}

  



