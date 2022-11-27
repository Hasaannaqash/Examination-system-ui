import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";

export default function Registration() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const [visiblitity, setvisiblitity] = useState("none")
    const navigate = useNavigate();
    return (

        <div>
            <div className="text-center">
                <main className="form-signin w-100 m-auto">
                    <div>
                    <img
              className="mb-4"
              src="https://cdn-icons-png.flaticon.com/512/2819/2819511.png"
              alt=""
              width={130}
              height={130}
      
            /> 
                        <h1 className="text-uppercase text-center mb-4">Register</h1>

                        <div className="form-floating">
                            <input name="firstname" onChange={(handleChange)} type="text" className="form-control" id="1" placeholder="text" required />
                            <label htmlFor="firstname"> First Name</label>
                        </div>

                        <div className="form-floating">
                            <input name="lastname" onChange={(handleChange)} type="text" className="form-control" id="2" placeholder="text" />
                            <label htmlFor="lastname">Last Name </label>
                        </div>



                        <div className="form-floating">
                            <input name="email" onChange={(handleChange)} type="email" className="form-control" id="3" placeholder="text" /> <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating">

                            <select onChange={(handleChange)} name="role" className="form-select" id="4" aria-label="Default select example">
                                <option disabled selected>  Role </option>
                                <option value="student">Student</option>
                                <option value="instructor">Lecturer</option>
                            </select>

                        </div>

                        <div className="form-floating">
                            <input name="password" onChange={(handleChange)} type="password" className="form-control" id="5" placeholder="Password" />
                            <label htmlFor="password">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" id="6"
                            onClick={() => handleRegistration()} type="submit"> Register  </button>

                        <div style={{ display: visiblitity }} class="alert alert-danger alert-dismissible fade show m-2" role="alert">
                            <strong>Error!</strong> {error}.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <p className="text-center text-muted mt-2 mb-0">Have already an account? <Link to="/"
                            className="fw-bold text-body"><u>Login here</u></Link></p>

                    </div>
                </main>
            </div>



        </div>
    )

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'firstname') {
            setFirstName(value);
            console.log('firstname => ', firstname)
        }
        else if (name === 'lastname') {
            setLastName(value);
            console.log('lastname => ', lastname)
        }
        else if (name === 'email') {
            setEmail(value);
            console.log('email => ', email)
        }

        else if (name === 'role') {
            setRole(value);
            console.log('role => ', role)
        }
        else if (name === 'password') {
            setPassword(value);
            console.log('password => ', password)
        }

    }




    function handleRegistration() {
        const user = {
            email: email,
            firstname: firstname,
            lastname: lastname,
            role: role,
            password: password
        };
        axios.post('http://localhost:3000/authentication/register', user).then(res => {
            setError('none')
            navigate('/')
            alert('Registration Successful')
        }).catch(error => {
            console.log('error => ', error)
            if (error.response.data.statusCode === 400) {
                // check if the error is an array 
                if (Array.isArray(error.response.data.message)) {
                    setError(error.response.data.message[0])
                }
                else
                setError(error.response.data.message)

                setvisiblitity('block')
            }
            else {
                setError('Something went wrong please try again')
                setvisiblitity('block')
            }
        })
    }

}



