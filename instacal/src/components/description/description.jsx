import React from 'react';
import './description.css';
import { useRef, useState, useEffect } from 'react';

import PubSub from 'pubsub-js'




export default function Description() {

    const [name, setName] = useState();
    const [cal, setCal] = useState();
    const [carbs, setCarbs] = useState();
    const [fat, setFat] = useState();
    const [protein, setProtein] = useState();

    var updateS = function (msg, data) {
        var pData =JSON.parse(data)
        console.log(pData)
            setName(pData.meal[0])
            setCal(pData.res.calories)
            setCarbs(pData.res.carbs)
            setFat(pData.res.fat)
            setProtein(pData.res.protein)
    };

    useEffect(() => {
        var token = PubSub.subscribe('Update', updateS);

        return () => {
          // Clean up the subscription
          PubSub.unsubscribe(token)
        };
      });
      

    function DesInput(){

        return(
            <div>
                <h4 className="desItem"><u>Food:</u> {name}</h4>
                <h4 className="desItem"><u>Calories:</u> {cal}</h4>
                <h4 className="desItem"><u>Carbs:</u> {carbs}</h4>
                <h4 className="desItem"><u>Fat:</u> {fat}</h4>
                <h4 className="desItem"><u>Protein:</u> {protein}</h4>
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
