import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "../Style_Pages/Add.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { getAuthUser } from "../helper/storage";
import axios from "axios";
export const EditQuestion = () => {
  let { id } = useParams();
  const auth = getAuthUser();
  const [question, setQuestion] = useState({
    Audio: "",
    Question: "",
    Ans_1:"",
    Ans_2:"",
    Ans_3:"",
    Ans_4:"",
    loading: false,
    reload: false,
    success: null,
  });
  

  const updateQuestion = (e) => {
    e.preventDefault();

    setQuestion({ ...question, loading: true });

    const formData = new FormData();
    formData.append("Audio", question.Audio);
    formData.append("Question", question.Question);
    formData.append("Ans_1", question.Ans_1);
    formData.append("Ans_2", question.Ans_2);
    formData.append("Ans_3", question.Ans_3);
    formData.append("Ans_4", question.Ans_4);
  
    axios
      .put("http://localhost:4000/quizzes/" + id, formData, {
     
      })
      .then((resp) => {
        setQuestion({
          ...question,
          loading: false,
          success: "Question updated successfully !",
          reload: question.reload + 1,
        });
      })
      .catch((err) => {
        setQuestion({
          ...question,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/quizzes/" + id)
      .then((resp) => {
        console.log(resp);
        setQuestion({
          ...question,
          Audio: resp.data.Audio,
          Question:resp.data.Question,
          Ans_1:resp.data.Ans_1,
          Ans_2:resp.data.Ans_2,
          Ans_3:resp.data.Ans_3,
          Ans_4:resp.data.Ans_4,
        });
      })
      .catch((err) => {
        setQuestion({
          ...question,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [question.reload]);

  
  return (
    <>
      <Header />
   <div className="form">
     <h1 className="title">Edit Questions and Answers</h1>
     
        {question.success && (
        <Alert variant="success" className="p-2">
          {question.success}
        </Alert>
      )}
     <form onSubmit={updateQuestion} >
         
       <div>
         <label className="label"> Audio</label>
         <input className="input" type="Text" value={question.Audio}
            onChange={(e) => setQuestion({ ...question, Audio: e.target.value })}  />
       </div>

       <div className="input-quistion">
         <label className="label"> Question</label>
         <input type="text" name=" Question" value={question.Question}
            onChange={(e) => setQuestion({ ...question, Question: e.target.value })} placeholder="Audio"   />

         <label className="label" >answer1</label>
         <input className="inputAns" type="text" value={question.Ans_1}
            onChange={(e) => setQuestion({ ...question, Ans_1: e.target.value })}   />


         <label className="label">answer2</label>
         <input className="inputAns"type="text"  value={question.Ans_2}
            onChange={(e) => setQuestion({ ...question, Ans_2: e.target.value })}/>

        

         <label className="label" >answer3</label>
         <input className="inputAns" type="text" value={question.Ans_3}
            onChange={(e) => setQuestion({ ...question, Ans_3: e.target.value })}  />

        

         <label className="label">answer4</label>
         <input className="inputAns"type="text"  value={question.Ans_4}
            onChange={(e) => setQuestion({ ...question, Ans_4: e.target.value })}/>

       
           {/* <label className="label"> Correct Ans</label>
         <input type="text" name=" Question"   /> */}
      
       </div>

       <button style={{marginLeft:400}} type="submit" >Update</button>
     </form>
   </div>

   <Footer />
    </>
  
);
};
