import React from "react";
import "./FAQ.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function FAQ() {

  const dataQ = [{"zero": ["How are you?", "Good."]}]
  const listItems = dataQ.map((d) => <span class="">{d.zero[0]} {d.zero[1]}</span>);

    return (
        <div id="faqs" className="section">
            <div id="questions" className="text">
            <h2 id="fourthTitle" className="headerTitle">Take the quiz! Find the meal for you:</h2>
            <div>
              <div class="container">
                <div class="row">
                  <div class="card-deck">
                    <span class="col border-light">
                      {listItems}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
}

export default FAQ;
