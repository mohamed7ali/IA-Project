import { useState } from "react";
import "../Style_Pages/Update_File.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React  from 'react';
const UpdateProfilePage = () => {
  // Use state to store user data
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit user data to API or server
    console.log(user);
  };

  // Handle form input changes
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
    <Header />

    <div className="form-container">
      <h1 className="form-title">Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">First Name</label>
          <input 
            className="form-input"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Phone</label>
          <input
            className="form-input"
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>

<Footer />
    </>
  );
};

export default UpdateProfilePage;