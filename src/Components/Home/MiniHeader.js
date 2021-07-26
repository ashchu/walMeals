import React from "react";

function MiniHeader(props){
    return (
        <div class={`miniheader ${props.class}`} style={{right: 0}}>
            <p style={{fontSize: "3vh"}}>{props.title}</p>
        </div>
    );

}

export default MiniHeader;
