import React from "react";

function MiniHeader(props){
    return (
        <div class={`miniheader ${props.class}`} style={{right: 0}}>
            <p style={{fontSize: "5vh"}}>{props.title}</p>
        </div>
    );

}

export default MiniHeader;