import React from 'react';
import "../Style_Components/Header.css";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import HeaderLinks from './Header_Links';
import DropDown from './DropDown.js';
<<<<<<< HEAD

import { useNavigate } from "react-router-dom";
import { getAuthUser, removeAuthUser } from '../helper/storage';
const Header = () => {
  const navigate = useNavigate();
  const auth = getAuthUser();
  const Logout = () => {
    removeAuthUser();
    navigate("/");
  };
=======
const Header = () => {
>>>>>>> main
    return (
        
    <header>
        
        <div className='logo-container'>
          <img src={logo} alt="Logo"></img>  
        </div>
      
        
           <HeaderLinks go_to={'/'} name={"Home"} />
           <HeaderLinks go_to={'/quiz'} name={" Exam    "} />
           <HeaderLinks go_to={'/QuizeInstruction'} name={"About Us"} />
           <HeaderLinks go_to={'/contact'} name={"Contact Us"} />
<<<<<<< HEAD

             {/* unAuthenticated Route  */}
             {!auth && (
              <>
           <Button name={'Sign in'} go_to={'/'}/>
           <Button name={'Sign up'} go_to={'/signup'}/>
              </>
            )}

            {/* Admin Routes  */}

=======
           <Button name={'Sign in'} go_to={'/login'}/>
           <Button name={'Sign up'} go_to={'/signup'}/>
>>>>>>> main
           <DropDown />
                        

    </header>
        

        

       

    );
};

export default Header;