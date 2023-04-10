import React ,{useState} from "react";
import '../../Style_Pages/Quiz.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactAudioPlayer from 'react-audio-player';
import Header from "../Header";



export function Quizh (){
    const [showFinalResults,setFinalResults]=useState(false);
   const [currentQuestion,setCurrentQuestion]=useState(0);
   const questions = [
    {
      text: "What is the capital of America?",
      "audio" : "http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3",
      
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      "audio" : "https://ia801406.us.archive.org/12/items/002_20221103_202211/012.mp3",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
     
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
     
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    // Increment the score


    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
        setFinalResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
  
    setCurrentQuestion(0);
    setFinalResults(false);
  };


    return(
        <>
        <Header/>
             <div className="quiz ">
        <h1>Eary Test</h1>
        {showFinalResults ?(
    <div className="final-result">
        <h1 className="sec-h1">Final Result</h1>
        <h2 className="sec2-h2"> 1 out of 10 correct - (20%) </h2>
      <button>Restart Quiz</button>
    </div>

        ):(
    <div className="question-card ">
        <h2 className="first-h2">Question {currentQuestion +1} out of {questions.length}</h2><br/><br/>
                <ReactAudioPlayer
                    src={questions[currentQuestion].audio}
                    autoPlay
                    controls
                />
<br/><br/>
        <h3 className="question-text">{questions[currentQuestion].text}</h3>
                        <ul>
                        {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );

                            })}
        </ul>


     </div>
        
    )}
    </div>
        </>

    );

    
}
