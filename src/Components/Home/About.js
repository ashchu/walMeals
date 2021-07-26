import React from "react";
import MiniHeader from "./MiniHeader.js";

function About() {
    return(
    <div id="about" className="section">
        {/* .text in home.css changes the width of the text */}

        <div id="mission" className="text">
            <MiniHeader title="about" class="mini-about" />
            <h1 id="headerFirst">WalMeals</h1>
            <h2 id="firstTitle" className="headerTitle">A Revinvention of the affordable, healthy home-cooked meal.</h2>
            <h3 style={{margin: "1.5em 0", fontSize: "200%"}}>We're bringing fresh meal kits for all the savers and families in our neighborhoods.</h3>
            <p>WalMeals is an initiative to take foods expiring soon in Walmart stores and using them in affordable prepped meal kits geared towards working families, college students, and low-income customers to provide healthy meals at a reasonable price point. </p>
            <p>Reliable access to quality quick, fresh meals is one of the most <a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-019-6546-2">pressing issues </a> America currently faces. With Walmart's current customer base including about 14% of those relying on SNAP benefits, this provides the opportunity to help uplift and support Walmart's neighborhood communities to thrive thanks to healthy and nutricious groceries. In addition, American grocery stores <a href="https://blog.smartsense.co/supermarkets-zero-food-waste#:~:text=Supermarkets%20are%20responsible%20for%2010,and%20dairy%20products%20every%20year">compose 10% of America's food waste</a> each year.</p>
            <p>
              By combining these two issues of 1. Accessibility to affordable nutricious food and 2. Grocery store food waste, we can combine them to produce the solutions customers want in their busy lives.
            </p>
        </div>
    </div>
    );
}

export default About
