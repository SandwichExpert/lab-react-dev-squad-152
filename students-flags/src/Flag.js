import React from "react";

function Flag({country}){

    return <img src={`https://www.countryflags.io/${country}/flat/64.png`} alt={country} 
    />
        // return <img src ="https://www.countryflags.io/${country}/flat/64.png"/>
    }

export default Flag;