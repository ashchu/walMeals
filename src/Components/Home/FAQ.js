import React from "react";
import "./FAQ.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQ() {

    return (
        <div id="faqs" className="section">
            <div id="questions" className="text">
            <h2 id="fourthTitle" className="headerTitle">Take the quiz! Find the meal for you:</h2>
            <div>
              <div class="container">
                <iframe id="interactApp60feb8ac30e03900170f3ad6" width="800" height="800" allowTransparency="true" frameborder="0" src={"https://quiz.tryinteract.com/#/60feb8ac30e03900170f3ad6?method=iframe"}></iframe>
              </div>
            </div>
            </div>
        </div>
    );
}

export default FAQ;
