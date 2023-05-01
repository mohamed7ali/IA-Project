import "../Style_Pages/Contact_Us.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from 'react';

const Contact_Us = () => {
    return (
        <>
        <Header />

        <h1>Contact Us</h1>
<<<<<<< HEAD
    <div className="container">
=======
    <div class="container">
>>>>>>> main
      <h2>Get in touch</h2>
      <form action="" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.."/>

        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.."/>

        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject.."/>

        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Write your message here.."></textarea>

        <input type="submit" value="Submit"/>
      </form>
      </div>

      

      <Footer />
      </>
    );
};

export default Contact_Us;