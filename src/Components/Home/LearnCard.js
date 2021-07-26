import React from "react";

function LearnCard(props){
    return(
        <div className="learn-card">
          <h4>{props.name}</h4>
          <h7>{props.desc}</h7>
          <img src={props.img} />
        </div>
    );


}

export default LearnCard
