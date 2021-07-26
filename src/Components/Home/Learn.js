import React from "react"
import LearnCard from "./LearnCard.js";
import MiniHeader from "./MiniHeader.js";
import Annie from "./assets/images/annie.jpg";
import Mom from "./assets/images/mom.jpeg";
import Dan from "./assets/images/dan.jpeg";


function Learn(){
    return (
        <div id="learn" className="section">
            {/* change the id to something else?? */}
            <div id="info" className="text projects">
                <MiniHeader title="featuring" class="mini-learn" />
                <h2 id="thirdTitle" className="headerTitle">Meet our neighbors.</h2>
                <div className="learn-card-container">
                    <LearnCard img={Annie} name="annie" desc={"College student on a tight budget. "} details={"Being in college for the first time, Annie needs to learn how to cook at an affordable pricepoint. That's where WalMeals comes in! Through the initiative, young adults can manage their own food security, explore new cuisines, and develop greater indepence at resonable pricepoints."}/>
                    <LearnCard img={Mom} name="Tiffany" desc={"Mom juggling work, life, and kids."} details={"Manging a lot of different things throughout the day can be tiring. To simplify the busy schedule lifestyle, WalMeals allows for families to simply find and choose a recipe they find intriguing, and ship them all the items they need to make their family meals, essentially removing the extra layer of indecisiveness and research that generally comes with cooking. "}/>
                    <LearnCard img={Dan} name="Daniel" desc={"A casual fitness enthusiast. "} details={"Always being out and about, meal-prepped kits allow for fitness enthusiasts and those with specific diets to easily track their calories based on the ingredients that they're using. The kits provide better transparency to what we put in our bodies and how to track our full nutrition."}/>
                </div>

            </div>



        </div>
    );
}

export default Learn
