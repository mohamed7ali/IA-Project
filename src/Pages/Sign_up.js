import React, { Component } from 'react'
import '../Style_Pages/Sign_in.css'
import { Link } from "react-router-dom"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
export default class SignUp extends Component {
  render() {
    return (
      <>
      <Header/>
            <div className=' signup template  d-flex  justify-content-center align-items-center  vh-100 '>
      <div className='  form_container p-5 rounded text-white 'style={{border: '3px solid black',backgroundColor:'white'}}>
      <form>
          <h3 className='text-center text-dark'>Sign Up</h3>
          <div className=' mb-2'>
                  <label htmlFor='fname' >First Name</label>
                  <input type='text'placeholder='Enter First Name' className='form-control'></input>
              </div> 
          <div className=' mb-2'>
                  <label htmlFor='lname' >Last Name</label>
                  <input type='text'placeholder='Enter Last Name' className='form-control'></input>
              </div> 
              <div className=' mb-2'>
                  <label htmlFor='email' >Email</label>
                  <input type='email'placeholder='Enter Email' className='form-control'></input>
              </div>
              <div className=' mb-2'>
                  <label htmlFor='Password' >Password</label>
                  <input type='Password'placeholder='Enter Password'className='form-control'></input>
              </div>
       <div className='d-grid'>
          <button className='btn ' style={{backgroundColor: "rgb(55, 2, 104)",color:"white"}}>Sign Up</button>
       </div>
       <p className='text-center mt-2 text-dark '>
          Already Registerd<Link to="/login" className='ms-2' style={{color:'rgb(55, 2, 104)'}}>Login</Link>
       </p>
          </form>
      </div>
  </div>

  <Footer />
      </>

    )
  }
}