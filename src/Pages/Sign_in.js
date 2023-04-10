import React, { Component } from 'react'
import '../Style_Pages/Sign_in.css'
import { Link } from "react-router-dom"
export default class Login extends Component {
  render() {
    return (

        <div className=' login template  d-flex  justify-content-center align-items-center  vh-100 ' style={{backgroundColor:'rgb(55, 2, 104)'}} >
            <div className='  form_container p-5 rounded 'style={{border: '3px solid black',backgroundColor:'white'}}>
            <form>
                <h3 className='text-center'>Sign In</h3>
                
                    <div className=' mb-2' >
                        <label htmlFor='email' >Email</label>
                        <input type='email'placeholder='Enter Email' className='form-control'></input>
                    </div>
                    <div className=' mb-2'>
                        <label htmlFor='Password' >Password</label>
                        <input type='Password'placeholder='Enter Password'className='form-control'></input>
                    </div>
                    <div className=' mb-2'>
                    <input type='checkbox' className='custom-control custom-checkbox'id='check'></input>
                        <label htmlFor='Check' className='custom-input-label ms-2'>Remember me</label>


                    </div>
             <div className='d-grid'>
                <button className='btn ' style={{backgroundColor: "rgb(55, 2, 104)",color:"white"}}>Sign in</button>
             </div>
             <p className='text-center mt-2'>
                Forget <a href='' style={{color:'rgb(55, 2, 104)'}}>Password?</a><Link to="/signup" className='ms-2' style={{color:'rgb(55, 2, 104)'}}>Sign up</Link>
             </p>
                </form>
            </div>
        </div>
    )
  }
}