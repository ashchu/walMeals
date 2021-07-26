import React from "react";
import MiniHeader from "./MiniHeader.js";
import Timer from "./Timer.js";
import dish2 from "./assets/images/circlefood2.PNG";

function Try() {
    return(

        <div id="project" className="section">
            <div className="circleBlue" id="blue1">
              <img src={dish2} />
            </div>
            <div id="info" className="text projects">
                <MiniHeader title="try" class="mini-visit" />
                <h2 id="secondTitle" className="headerTitle">You're Invited.</h2>
                <div className="location">
                    <h3 style={{fontSize: "250%"}}>We're launching in...
                    <br></br></h3>
                </div>

                {/* Timer */}
                <Timer />

                <div className="stay-tuned">
                   <h3>Stay tuned - big things are coming. Sign up for our newsletter to be notified when meal kit subscriptions begin!</h3>
                </div>

            </div>



        </div>

    );
}

export default Try;
