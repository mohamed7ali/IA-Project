import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Style_Pages/Add.css";
import Question from "../Components/Question";

export const AddQuestion = () => {
  return (
    <>
    <Question title={"Add Question And Answers"} submit={"Add"}/>
    </>
     
  );
};
