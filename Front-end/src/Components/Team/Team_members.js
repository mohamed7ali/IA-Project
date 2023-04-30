import React from 'react';

import Team_Card from './Team_Card';
import { Data } from './TeamData';
const Team_members = () => {
  
  const display_Team_Cards = () =>{
    return Data.map((item) =>{
         return <Team_Card name={item.name} img={item.img} team={item.team} />;
  });
   }

    return (

        <div class="team text-center pb-5 pt-5">
        <div class="container pb-5 pt-5">

          <h1 style={{color:'white'}} >TEAM MEMBERS</h1>
          <p style={{color:'yellow'}} class="fs-10 mb-50  fw-bold">Introduced to you by:</p>
        
            <div class="row justify-content-center">
                     
              {display_Team_Cards()}
                  
            </div>
        </div>
      </div>
    );
};

export default Team_members;