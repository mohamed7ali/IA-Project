import React from 'react';
import "../Style_Components/Header.css";
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        
    <header>
        
          <div className='logo-container'>
          <img src={logo} alt="Logo"></img>  
          </div>
      
      <Link to="../Pages/Main.js" id='link' className='link'>Home</Link>
      <Link to="../Pages/Test.js.js" id='link' className='link'>Exam</Link>
      <Link to="../Pages/About_Us.js" id='link' className='link'>About Us</Link>
      <Link to="../Pages/Contact_Us.js" id='link' className='link'>Contact Us</Link>
      <Link to="../Pages/Sign_in.js" id='link_btn1'><button> Sign in </button></Link>
      <Link to="../Pages/Sign_up.js" id='link_btn2'><button> Sign up </button></Link>

        </header>
        

        

       

    );
};

export default Header;