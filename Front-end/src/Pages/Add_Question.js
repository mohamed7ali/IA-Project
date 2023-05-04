import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Style_Pages/Add.css";

export const AddQuestion = () => {
  return (
    <>
      <Header />
      <div className="form">
        <h1 className="title">Add questions</h1>
        <form>
          <div>
            <label className="label">Select audio</label>
            <input className="input" type="file" />
          </div>

          <div className="input-quistion">
            <label className="label"> Question</label>
            <input type="text" name=" Question" />

            <label className="label">answer1</label>
            <input type="text" />

            <label className="label">answer2</label>
            <input type="text" />

            <label className="label">answer3</label>
            <input type="text" />

            <label className="label">answer4</label>
            <input type="text" />
            <label className="label">Correct answer</label>
            <input type="text" />
          </div>

          <button type="submit">Upload</button>
        </form>
      </div>

      <Footer />
    </>
  );
};
