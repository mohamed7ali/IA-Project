import Login from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/'element={<Login />}> </Route>
  <Route path='/signup'element={<SignUp />}> </Route>
</Routes>
</BrowserRouter>

import "./App.css";


const App = () => {
  return (
    <>
    <h1>Hello</h1>
    
    </>

  );
}

export default App;
