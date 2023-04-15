import Login from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Main from "./Pages/Main";
import QuizInstructions from "./Components/quiz/QuizInstruction";
import { Quizh } from "./Components/quiz/quizH";
import UpdateProfilePage from './Pages/Update_Profile'
import Contact_Us from './Pages/Contact_Us'
import New_Users_Queue from './Pages/New_Users_Queue'
import { History } from "./Pages/history";
import { Add_Question } from "./Pages/Add_Question";

function App() {
  return (
    
    <BrowserRouter>
<Routes>
<Route path='/'element={<Main />}> </Route>
 <Route path='/login'element={<Login />}> </Route>
  <Route path='/signup'element={<SignUp />}> </Route>
  <Route path='/QuizeInstruction'element={<QuizInstructions />}> </Route>
 <Route path='/quiz'element={<Quizh/>}> </Route>
 <Route path='/updatePage'element={<UpdateProfilePage/>}> </Route>
 <Route path='/contact'element={<Contact_Us/>}> </Route>
 <Route path='/newUser'element={<New_Users_Queue/>}> </Route>
 <Route path='/history'element={<History/>}> </Route>
 <Route path='/add'element={<Add_Question/>}> </Route>
</Routes>
</BrowserRouter>
    

    

  )}

export default App;
