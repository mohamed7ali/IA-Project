import React from 'react';
import "../Style_Components/DropDown.css"
import img from "../Components/menu2.png"
import DropDownLinks from './DropDownLinks.js';
import { useNavigate } from "react-router-dom";
import { getAuthUser, removeAuthUser } from '../helper/storage';
const DropDown = () => {
  const navigate = useNavigate();
  const auth = getAuthUser();
  const Logout = () => {
    removeAuthUser();
    navigate("/");
  };

    
    
    return (
        <>
    <div className="dropdown">
      <button style={{backgroundColor:'transparent', border:'none'}} className="dropdownToggle" onClick={toggleDropdown} ><img style={{ width: '35px', height: '35px' }} src={img} /></button>
      <ul className="dropdown-menu">
       <li><DropDownLinks className="a" go_to={"/newUser"} name={"Users in queue"} /></li>
       <li><DropDownLinks className="a" go_to={"/add"} name={"Add questions"} /></li>
       <li><DropDownLinks className="a" go_to={"/updatePage"} name={"Update profile"} /></li>
       <li><DropDownLinks className="a" go_to={"/history"} name={"Exams history"} /></li>
       <li><DropDownLinks className="a"  name={"Log out"} onClick={Logout}/></li>
     </ul>
     
    </div>



</>
    );

    function toggleDropdown() {
      const dropdownToggle = document.querySelector('.dropdownToggle');
      dropdownToggle.classList.toggle('active');
    }
    
};







export default DropDown;