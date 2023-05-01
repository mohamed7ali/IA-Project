<<<<<<< HEAD
import React, { Component } from "react";
=======
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { Component } from "react";
>>>>>>> main
>>>>>>> 37ae715fbb4389d3dc064cfba13e559d5c674dfa
import "../Style_Pages/Sign_in.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthUser } from "../helper/storage";
const SignUp = () =>  {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
    phone:"",
    loading: false,
    err: [],
  });
  const RegisterFun = (e) => {
    e.preventDefault();
    setRegister({ ...register, loading: true, err: [] });
    axios
      .post("http://localhost:4000/auth/register", {
        Email: register.email,
        Password: register.password,
        Name: register.name,
        Phone:register.phone
      })
      .then((resp) => {
        setRegister({ ...register, loading: false, err: [] });
        setAuthUser(resp.data);
        navigate("/home")
       
      })
      .catch((errors) => {
        setRegister({
          ...register,
          loading: false,
          err: errors.response.data.errors,
        });
      });
  };
 
    return (
      <div>
=======
>>>>>>> 37ae715fbb4389d3dc064cfba13e559d5c674dfa
export default class SignUp extends Component {
  render() {
    return (
      <>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 37ae715fbb4389d3dc064cfba13e559d5c674dfa
        <Header />
        <div className=" signup template  d-flex  justify-content-center align-items-center  vh-100 ">
          <div
            className="  form_container p-5 rounded text-white "
            style={{ border: "3px solid black", backgroundColor: "white" }}
          >
<<<<<<< HEAD
            <form>
              <h3 className="text-center text-dark">Sign Up</h3>

              <div className=" mb-2">
=======
<<<<<<< HEAD
            <form onSubmit={RegisterFun}>
              <h3 className="text-center text-dark">Sign Up</h3>

              <div className=" mb-2">
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={register.name}
                  onChange={(e) => setRegister({ ...register, name: e.target.value })}
=======
            <form>
              <h3 className="text-center text-dark">Sign Up</h3>

              <div className=" mb-2">
>>>>>>> 37ae715fbb4389d3dc064cfba13e559d5c674dfa
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
<<<<<<< HEAD
                  className="form-control"
                ></input>
              </div>

              <div className=" mb-2">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="form-control"
                ></input>
              </div>

              <div className=" mb-2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="form-control"
                ></input>
              </div>

              <div className=" mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                ></input>
              </div>

              <div className=" mb-2">
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
                  placeholder="Enter Password"
                  className="form-control"
                ></input>
              </div>

              <div className="d-grid">
                <button
                  className="btn "
                  style={{ backgroundColor: "rgb(55, 2, 104)", color: "white" }}
                >
                  Sign Up
                </button>
              </div>

              <p className="text-center mt-2 text-dark ">
                Already Registerd
                <Link
                  to="/login"
                  className="ms-2"
                  style={{ color: "rgb(55, 2, 104)" }}
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>

        <Footer />
=======
>>>>>>> main
                  className="form-control"
                ></input>
              </div>

<<<<<<< HEAD
=======
              <div className=" mb-2">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="form-control"
                ></input>
              </div>

              <div className=" mb-2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="form-control"
                ></input>
              </div>
>>>>>>> main

              <div className=" mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
<<<<<<< HEAD
                  value={register.email}
                  onChange={(e) =>
                    setRegister({ ...register, email: e.target.value })}
=======
>>>>>>> main
                ></input>
              </div>

              <div className=" mb-2">
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
                  placeholder="Enter Password"
                  className="form-control"
<<<<<<< HEAD
                  value={register.password}
                  onChange={(e) =>
                    setRegister({ ...register, password: e.target.value })
                  }
                ></input>
              </div>
              <div className=" mb-2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                className="form-control"
                value={register.phone}
                onChange={(e) =>
                  setRegister({ ...register, phone: e.target.value })}
=======
>>>>>>> main
                ></input>
              </div>

              <div className="d-grid">
                <button
<<<<<<< HEAD
                          type="submit"
                          disabled={register.loading === true}
=======
>>>>>>> main
                  className="btn "
                  style={{ backgroundColor: "rgb(55, 2, 104)", color: "white" }}
                >
                  Sign Up
                </button>
              </div>

<<<<<<< HEAD
              {register.err.map((error, index) => (
        <Alert key={index}   style={{color:"white",width:350,backgroundColor:"#690650",height:80,borderRadius:10}}>
        {error.msg}
      </Alert>
      ))}
                <Link
                  to="/"
=======
              <p className="text-center mt-2 text-dark ">
                Already Registerd
                <Link
                  to="/login"
>>>>>>> main
                  className="ms-2"
                  style={{ color: "rgb(55, 2, 104)" }}
                >
                  Login
                </Link>
<<<<<<< HEAD
              
=======
              </p>
>>>>>>> main
            </form>
          </div>
        </div>

        <Footer />
<<<<<<< HEAD
      </div>
    );
  
}
export default SignUp;
=======
>>>>>>> 37ae715fbb4389d3dc064cfba13e559d5c674dfa
      </>
    );
  }
}
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 37ae715fbb4389d3dc064cfba13e559d5c674dfa
