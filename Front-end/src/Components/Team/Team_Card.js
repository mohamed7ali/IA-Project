import React from 'react';
import { Data } from './TeamData';
const Team_Card = (props) => {
  
    return (
        <div class="col-md-6 col-lg-3 mb-4">
                    <div class="box bg-white">
                      <img class="img-fluid" src={props.img} alt=""/>
                      <h4 style={{color:'black'}} class="p-3 ">{props.name}</h4>
                      <blockquote class="text-black-50 p-3 ">{props.team}</blockquote>
                    </div>
                  </div>
    );
};

export default Team_Card;