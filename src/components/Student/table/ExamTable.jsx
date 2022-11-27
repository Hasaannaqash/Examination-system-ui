import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import TableRow from './TableRow';

export default function ExamTable() {
    const [data, setData] = useState({});
    const studentId = JSON.parse(localStorage.getItem("user")).user.id;
    let i=0;
    function getData(){
        axios
        .get(`http://localhost:3000/answeres/students/${studentId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
              },
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            }
            );
    }
    useEffect(() => {
        getData();
    }, []);
  return (
   
   <>
       <div>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
{
// iture over an object
    Object.keys(data).map((key) => {
        i=i+1;
      return <TableRow exam={data[key]} id={i}/>
    }
    )
}
  </tbody>
</table>
    </div>
   </>

  )
}

