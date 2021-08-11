import React from "react";
import MiniHeader from "./MiniHeader.js";
import groupImage from "./assets/images/calhacks.jpeg";

function Ashley() {
    return(
    <div id="ashley" className="section">
        {/* .text in home.css changes the width of the text */}
        <img id="ashleyimg" src={groupImage}/>
        <div id="ashleymission" className="text">
            <MiniHeader title="ashley" class="mini-about" />
            <h1>Meet the developer!</h1>
            <h2>Hi, my name's Ashley and I'm currently a junior studying Electrical Engineering & Computer Science with a minor in Art History. </h2>
            <p>I'm a major foodie, animation enthusiast, and dog fanatic. When I'm not debugging projects, I'm heavily involved in the women in engineering space on campus including SWE, AWE, and CSK since they all made an incredible impact on me when I've needed them most.</p>
        </div>
    </div>
    );
}

export default Ashley
