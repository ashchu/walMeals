import React from 'react';
import { Link } from "react-scroll";
import Scrollchor from 'react-scrollchor';
import styled from "styled-components";
import logo from "./assets/images/walmart-logo.png";
import "./assets/stylesheet/stylesheet.css";
import "./anim-typewriter.js";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        arrVal: 0,
        placeText: "",
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
    };
  }

 render() {

  const BlastOff = styled(Scrollchor)`
    text-align: center;
    line-height: 3rem;
    justify-content: center;
    position: relative;
    width: 25rem;
    height: 3rem;
    background: transparent;
    font-family: myriad-pro-semiextended, sans-serif;
    font-size:18px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 10px;
    border: 3px solid white;
    margin: 1em 1em;

    &:hover {
      text-decoration: none;
    }
`;

    return (
      <div id="topBarColor">
        <div class="circlePink" id="pink1"></div>
        <div class="circlePurp" id="purp1">
          <img src="https://purepng.com/public/uploads/large/purepng.com-food-platefood-meat-plate-tasty-grill-breakfast-dinner-french-fries-launch-941524624270veqpm.png" />
        </div>
        <div id="landing">
          <div id="border-box">
            <div id="title">
              <a href="https://walmart.com"><img id="walmartLogo" src={logo} alt="walmart-logo"/></a>
                <div className="typewriter">
                  <p id="landing-text" style={{textAlign: 'center'}} data-type='[]' data-period="2500">Now offering fresh meal kits for any day!</p>
                </div>

              {/* BLAST OFF BUTTON */}
              <div class="blast-off-div col-md-10 col-lg-8 mx-auto text-center">
                <BlastOff to="about"><span style={{position: 'relative', bottom: '10%'}}>Live simply healthy!</span></BlastOff>
              </div>
            </div>

          </div>
        </div>
    </div>
    )
  }
}

export default Landing;
