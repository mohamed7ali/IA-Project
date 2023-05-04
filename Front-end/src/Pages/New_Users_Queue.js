import React from "react";
import "../Style_Pages/New_Users_Queue.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
const NewUsersQueue = () => {
  return (
    <>
      <Header />

      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mohamed Ali</td>
              <td>Mohamed.Ali@example.com</td>
              <td>01111111111</td>
            </tr>
            <tr>
              <td>Mohamed Mahmoud</td>
              <td>Mohamed.Mahmoud@example.com</td>
              <td>01222222222</td>
            </tr>
            <tr>
              <td>Abo Treka</td>
              <td>Abo.Treka@example.com</td>
              <td>01000000000</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <Button className="add" name={"ADD"} />
        <Button className="delete" name={"DELETE"} />
      </div>

      <Footer />
    </>
  );
};

export default NewUsersQueue;
