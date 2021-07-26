import React from "react";

function LearnCard(props){
    return(
        <div className="learn-card" src={props.img}> {props.name} </div>
    );

    
}

export default LearnCard