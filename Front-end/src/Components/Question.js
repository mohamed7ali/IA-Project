
import { getQuestion } from "../helper/SetQuestion";
import { setQuestion } from "../helper/SetQuestion";
import Footer from "./Footer";
import Header from "./Header";

const Question = (props) => {
    const question= getQuestion();

    return (
       <>
         <Header />
      <div className="form">
        <h1 className="title">{props.title}</h1>
        <form>
            
          <div>
            <label className="label"> Audio</label>
            <input className="input" type="Text" placeholder={question.Audio} />
          </div>

          <div className="input-quistion">
            <label className="label"> Question</label>
            <input type="text" name=" Question" placeholder={question.Question} />

            <label className="label" >answer1</label>
            <input className="inputAns" type="text" placeholder={question.Ans_1} />


            <label className="label">answer2</label>
            <input className="inputAns"type="text" placeholder={question.Ans_2}/>

           

            <label className="label" >answer3</label>
            <input className="inputAns" type="text"placeholder={question.Ans_3} />

           

            <label className="label">answer4</label>
            <input className="inputAns"type="text"placeholder={question.Ans_4} />

          
              <label className="label"> Correct Ans</label>
            <input type="text" name=" Question"placeholder={question.Correct} />
         
          </div>

          <button style={{marginLeft:400}} type="submit">{props.submit}</button>
        </form>
      </div>

      <Footer />
       </>
    );
};
export default Question;