import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from"react-router-dom";
import Header from './Components/Header.js'; 
import Main from './Pages/Main.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    
    <Header />
    <Main />
    
    </BrowserRouter>
);


