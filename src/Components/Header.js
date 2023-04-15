import React from 'react';
import "../Style_Components/Header.css";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import HeaderLinks from './Header_Links';
import DropDown from './DropDown.js';
const Header = () => {
    return (
        
    <header>
        
        <div className='logo-container'>
          <img src={logo} alt="Logo"></img>  
        </div>
      
        
           <HeaderLinks go_to={'/'} name={"Home"} />
           <HeaderLinks go_to={'/quiz'} name={" Exam    "} />
           <HeaderLinks go_to={'/QuizeInstruction'} name={"About Us"} />
           <HeaderLinks go_to={'/contact'} name={"Contact Us"} />
           <Button name={'Sign in'} go_to={'/login'}/>
           <Button name={'Sign up'} go_to={'/signup'}/>
           <DropDown />
                        

    </header>
        

        

       

    );
};

export default Header;