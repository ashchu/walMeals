import React from "react"
import LearnCard from "./LearnCard.js";
import MiniHeader from "./MiniHeader.js";

function How(){
    return (
        <div id="how" className="section">
            {/* change the id to something else?? */}
            <div id="info" className="text projects">
                <MiniHeader title="how" class="mini-learn" />
                <h2 id="thirdTitle" className="headerTitle">How it works</h2>
                <div className="learn-card-container">
                    <LearnCard name="Step 1" desc="Gathering Ingredients" img='https://www.marketplace.org/wp-content/uploads/2020/11/bodega.jpg?w=1200' details="Logging produce, proteins, and goods that are closing their expiration dates, item inventory notes what produce needs to be used – resulting in produce that can be used for the meal kits that are posted each week." />
                    <LearnCard name="Step 2" desc="Assembling Meal" img='https://www.moneymanagement.org/-/media/money-management/images/blogs/2018/023-meal-prep.ashx' details="Items marked in the inventory can be matched to create a meal kit based on automated pre-logged recipes by a recipe algorithm or a personalized ML model based off of a customer's past purchasing history, including allergies and dietary restrictions."/>
                    <LearnCard name="Step 3" desc="Cooking Time" img='https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/02/EasyMealPrep-SG-770x533-1.jpg' details="And finally – cooking time! Items are bagged and prepared for cutomer's to bring home and cook a warm meal with their families. Each meal pack comes packaged with detailed instructions." />
                </div>

            </div>



        </div>
    );
}

export default How
