import React ,{useState,useEffect} from "react";
import '../Style_Pages/Quiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactAudioPlayer from 'react-audio-player';


import axios from "axios";

import Header from "../Components/Header";
import Button from "../Components/Button";
import { getAuthUser } from "../helper/storage";
import { setQuestion } from "../helper/SetQuestion";



export function QuestionsAdmin (){
  const auth = getAuthUser();
   const [currentQuestion,setCurrentQuestion]=useState(0);
   console.log(auth.email)
   const [exams, setExam] = useState({
     loading: true,
     results: [],
     err: null,
     reload: 0,
   });
 
   useEffect(() => {
     setExam({ ...exams, loading: true });
     axios
       .get("http://localhost:4000/quizzes")
       .then((resp) => {
         setExam({ ...exams, results: resp.data, loading: false, err: null });
         console.log(resp);
        
       })
       .catch((err) => {
         setExam({
           ...exams,
           loading: false,
           err: " something went wrong, please try again later ! ",
         });
       });
   }, [exams.reload]);
  const optionClicked = (isCorrect) => {
    setQuestion( exams.results.data[currentQuestion]);

    if (currentQuestion + 1 < exams.results.length) {
      setCurrentQuestion(currentQuestion + 1);
     
      //  setQuestion( exams.results.data[currentQuestion]+1);
     
     } 
     
    }
 
    
 
 


    return(
        <>
        <Header/>
        {exams.loading==true&&(<h1>loading</h1>)}
             <div className="quiz ">
        <h1 >Eary Test</h1>
        
           
       
    <div className="question-card ">
      {exams.loading===false&&exams.err==null&&(<>
        <h2 >Question {currentQuestion +1} out of {exams.results.length}</h2><br/><br/>
                <ReactAudioPlayer
                    src={exams.results[currentQuestion].Audio}
                    autoPlay
                    controls
                />
<br/><br/>
        <h3 className="question-text">{exams.results[currentQuestion].Question}</h3>
                        <ul className="ul1">
                       
              
                <li className="li1"
                 onClick={() => optionClicked()}
                >
                  {exams.results[currentQuestion].Ans_1}
                </li>
                <li className="li1"
                 onClick={() => optionClicked()}
                >
                  {exams.results[currentQuestion].Ans_2}
                </li>
                <li className="li1"
                 onClick={() => optionClicked()}
                >
                  {exams.results[currentQuestion].Ans_3}
                </li>
                <li className="li1"
                 onClick={() => optionClicked()}
                >
                  {exams.results[currentQuestion].Ans_4}
                </li>
             

                           
        </ul>
      </>)}
       


{auth.status=== 1 && (
                  <>
                          <div className="btn1" style={{backgroundColor:"rgb(248, 243, 243)"}}>
        <Button name={'Edit'} go_to={'/edit'}/>
        <Button name={'Delete'} go_to={''}/>
        
</div>
          </>
                )}
     </div>
        
        
       </div>
        </>

      );

}

