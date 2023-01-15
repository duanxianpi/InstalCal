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

    let totalString = "";
    let totalCal = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalProtein = 0;

    function addString(str) {
        totalString += (" + "+str)
    }
    // function addC(item, index, arr) {
    //     console.log(str)
    //     pData.res[pData.meal[str]].calories += totalCal
    // }
    
    // function addCa(pData,str) {
    //     pData.res[str].carbs += totalCarbs

    // }
    
    // function addF(pData,str) {
    //     pData.res[str].fat += totalFat
    // }
    
    // function addP(pData,str) {
    //     pData.res[str].protein += totalProtein
    // }

    var updateS = function (msg, data) {
        var pData =JSON.parse(data)
        console.log(pData)
        pData.meal.forEach(addString)
        pData.meal.forEach((item, index, arr) => {
            totalCal += pData.res[item].calories
        })
        pData.meal.forEach((item, index, arr) => {
            totalCarbs += pData.res[item].carbs
        })
        pData.meal.forEach((item, index, arr) => {
            totalFat += pData.res[item].fat
        })
        pData.meal.forEach((item, index, arr) => {
            totalProtein += pData.res[item].protein
        })

            setName(totalString)
            setCal(totalCal)
            setCarbs(totalCarbs)
            setFat(totalFat)
            setProtein(totalProtein)
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
