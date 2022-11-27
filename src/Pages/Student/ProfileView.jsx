import React from 'react'
import Dashboard from '../../components/Student/Dashboard';
import Navbar from '../../components/Student/Navbar'

export default function ProfileView() {
  const user=JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <Navbar/>


        <Dashboard
           name={user.user.firstname+" "+user.user.lastname}
           email={user.user.email}
           role={user.user.role}
           course={"Bachelor of Science (Hons) in Software Engineering with Multimedia"}

        />
    </>
  )
}
 
