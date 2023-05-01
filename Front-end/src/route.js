import App from "./App";
import QuizInstructions from "./Components/quiz/QuizInstruction";
import { Quizh } from "./Components/quiz/quizH";
import { Add_Question } from "./Pages/Add_Question";
import Contact_Us from "./Pages/Contact_Us";
import Main from "./Pages/Main";
import New_Users_Queue from "./Pages/New_Users_Queue";
import Login from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import UpdateProfilePage from "./Pages/Update_Profile";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Guest from "./middleware/Guest";
import {History} from "./Pages/history"


export const routes = createBrowserRouter([
    {
      path: "",
      element: <App/>,
      children: [
        {
          path: "/QuizeInstruction",
          element: <QuizInstructions/>,
        },
        {
          path: "/home",
          element: <Main />,
        },
  
        // GUEST MIDDLEWARE
        {
          element: <Guest />,
          children: [
            {
              path: "/",
              element: <Login />,
            },
            {
              path: "/signup",
              element: <SignUp />,
            },
          ],
        },
        {
            path: "/quiz",
            element: <Quizh />,
          },
          {
            path: "/updatePage",
            element: <UpdateProfilePage />,
          },
          {
            path: "/contact",
            element: <Contact_Us />,
          },
          {
            path: "/newUser",
            element: <New_Users_Queue />,
          },
          {
            path: "/history",
            element: <History />,
          },
          {
            path: "/add",
            element: <Add_Question />,
          },
              
       
      ],
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
  ]);