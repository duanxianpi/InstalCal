import React from 'react';
import './description.css';
import { useRef, useState, useEffect } from 'react';

import PubSub from 'pubsub-js'
import data from './random.json';




export default function Description() {


    useEffect(() => {
        var token = PubSub.subscribe('Update', (obj)=>{});

        return () => {
          // Clean up the subscription
          PubSub.unsubscribe(token)
        };
      });
      

    function DesInput(){

        return(
            <div>
                <h4 className="desItem"><u>Food:</u> {"Cookie"}</h4>
                <h4 className="desItem"><u>Calories:</u> {data.foods["Cookie"].calories}</h4>
                <h4 className="desItem"><u>Carbs:</u> {data.foods["Cookie"].calories}</h4>
                <h4 className="desItem"><u>Protien:</u> {data.foods["Cookie"].calories}</h4>
                <h4 className="desItem"><u>Fat:</u> {data.foods["Cookie"].calories}</h4>
            </div>

        )
    };


  return (
    <div className="Food_Des">
        <h2 className="des_ttl">Details</h2>
        <DesInput food="Pizza" cal="600" des="Lorem ipsum dolor sit amet, assum graecis percipit cum ei, quo at erant efficiendi. Eos fugit nihil ponderum ut. Per et alia everti suavitate, choro percipit liberavisse ea eum"/>
        

    </div>
  )
}
