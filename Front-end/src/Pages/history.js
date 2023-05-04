import React from "react";
import "../Style_Pages/New_Users_Queue.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export const History = () => {
  return (
    <>
      <Header />

      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>Exam Id</th>
              <th>Degree</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>90%</td>
              <td>Mohamed.Ali@example.com</td>
              <td>15 Apr,2023</td>
            </tr>
            <tr>
              <td>1</td>
              <td>90%</td>
              <td>Mohamed.Ali@example.com</td>
              <td>15 Apr,2023</td>
            </tr>
            <tr>
              <td>1</td>
              <td>90%</td>
              <td>Mohamed.Ali@example.com</td>
              <td>15 Apr,2023</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};
