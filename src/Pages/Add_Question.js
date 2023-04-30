
import React, { Component }  from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Style_Pages/Add.css'

export const Add_Question = () => {
    return (
        <>
            <Header />
            <div className="form">
                <h1 className="title">Add questions</h1>
                <form >
                    <div>
                        <label className="label" >Select audio</label>
                        <input
                            className="input"
                            type="file"
                        />
                    </div>

                    <div className='input-quistion'>
                        <label className="label">Add Question</label>
                        <input
                            
                            type="text"
                            name=" Question"

                        />
                    



                   
                        <label className="label">right choise</label>
                        <input
                            
                            type="text" />
                    


                   
                        <label className="label">false choice</label>
                        <input
                            
                            type="text"


                        />
                    

                                  <label className="label">false choice</label>
                        <input
                           
                            type="text"


                        />
                   
                        <label className="label">false choice</label>
                        <input
                           
                            type="text"


                        />
                    </div>



                    <button type="submit">Upload</button>
                </form>
            </div>

            <Footer />
        </>
    );
};

