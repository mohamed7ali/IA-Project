import React from 'react';
import "../Style_Components/DropDown.css"
import img from "../Components/menu2.png"
import DropDownLinks from './DropDownLinks.js';
const DropDown = () => {

    
    
    return (
        <>
    <div class="dropdown">
      <button style={{backgroundColor:'transparent', border:'none'}} class="dropdownToggle" onClick={toggleDropdown} ><img style={{ width: '35px', height: '35px' }} src={img} /></button>
      <ul class="dropdown-menu">
       <li><DropDownLinks className="a" go_to={""} name={"Users in queue"} /></li>
       <li><DropDownLinks className="a" go_to={""} name={"Add questions"} /></li>
       <li><DropDownLinks className="a" go_to={""} name={"Update profile"} /></li>
       <li><DropDownLinks className="a" go_to={""} name={"Exams history"} /></li>
       <li><DropDownLinks className="a" go_to={""} name={"Log out"} /></li>
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