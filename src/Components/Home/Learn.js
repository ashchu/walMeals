import React from "react"
import LearnCard from "./LearnCard.js";
import MiniHeader from "./MiniHeader.js";

function Learn(){
    return (
        <div id="learn" className="section">
            {/* change the id to something else?? */}
            <div id="info" className="text projects">
                <MiniHeader title="learn" class="mini-learn" />
                <h2 id="thirdTitle" className="headerTitle">Learn With Us.</h2>
                <div className="learn-card-container">  
                    <LearnCard img='./assets/images/staticPhoto.png' />
                    <LearnCard img='./assets/images/staticPhoto.png' />
                    <LearnCard img='./assets/images/staticPhoto.png' />
                </div>
                
            </div>
           
                
            
        </div>
    );
}

export default Learn