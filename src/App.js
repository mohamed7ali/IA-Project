import Login from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Main from "./Pages/Main";
import QuizInstructions from "./Components/quiz/QuizInstruction";

function App() {
  return (
    
    <BrowserRouter>
<Routes>
<Route path='/'element={<Main />}> </Route>
 <Route path='/login'element={<Login />}> </Route>
  <Route path='/signup'element={<SignUp />}> </Route>
  <Route path='/QuizeInstruction'element={<QuizInstructions />}> </Route>
  
</Routes>
</BrowserRouter>
    



  )}

export default App;
