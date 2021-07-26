import React, { useState } from "react";
import { Link as Scrolling } from "react-scroll";
import styled, { createGlobalStyle } from "styled-components";
import './MeatballButton.css';

const COLORS={
  black: "#000000",
  white: "#FFFFFF",
  blue: "#0072CE",
  yellow: "#FFB81C"
};

const NavBackground = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;

  background-image: #FFB81C;
  background-color: #FFB81C;
  background: #FFB81C;
  opacity: 1;
  z-index: 599;

  height: 6rem;
  width: 6rem;
  border-radius: 50%;

  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.1s;
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked? "100%" : "0")};
  opacity: ${(props) => (props.clicked? "1" : "0")};

  transition: width 0.1s, opacity 0.1s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-33%, -50%);
  text-align: center;
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
.button {
  position: fixed;
  height: 3rem;
  width: 6rem;
  top: 1rem;
  right: 1rem;
  padding: 16px;
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
  z-index: 1000;
}

.button:hover {
  background: transparent
}

.icon {
  display: block;
  position: relative;
  width: 4rem;
  height: 1rem;
  z-index: 1000;
}
/* MAKE THE DOTS SMALLER */
.dot {
  position: absolute;
  top: calc(50% - 4px);
  left: calc(50% - 4px);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
  transition: transform 0.5s;
  &:nth-child(1) {
    transform: translateX(-17px);
  }
  &:nth-child(2) {
    transform: translateX(0);
    z-index: 500;
  }
  &:nth-child(3) {
    transform: translateX(17px);
  }
  &.open:nth-child(1) {
    transform: translateX(0);
  }
  &.open:nth-child(2) {
    transform: translateX(0);
    z-index: 0;
  }
  &.open:nth-child(3) {
    transform: translateX(0);
  }
}
/* MAKE THE RECTANGLES SKINNIER */
.rectangle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 8px;
  height: 5px;
  border-radius: 5px;
  background: white;
  transition-property: opacity, height;
  transition-duration: 0.5s;
  &.first {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &.open {
    height: 44px;
  }
}
`;

const MeatballButton = ({}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <GlobalStyle />
      <button className="button" onClick={handleClick}>
        <span className="icon">
          <span className={`dot ${click && "open"}`} />
          <span className={`dot ${click && "open"}`} />
          <span className={`dot ${click && "open"}`} />
          <span className={`rectangle first ${click && "open"}`} />
          <span className={`rectangle ${click && "open"}`} />
        </span>

      </button>

      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        {/* Add the other visual components (rocket, circles) */}
        <div class="circlePink" id="pink-small"></div>
        <div class="circlePink" id="pink-mini"></div>
        <div class="circleBlue" id="blue-medium"></div>
        <div class="circlePurp" id="purp1"></div>
        <List>
          <li class="nav-item">
            <Scrolling onClick={handleClick}
                to="about"
                spy={false}
                smooth={true}
                offset={-70}
                style={{padding: "10px 48px"}}>
            ABOUT
            </Scrolling>

          </li>
          <li class="nav-item">
          <Scrolling onClick={handleClick}
                to="project"
                spy={false}
                smooth={true}
                offset={-70}
                style={{padding: "10px 48px"}}>
            TRY
            </Scrolling>
          </li>
          <li class="nav-item">
          <Scrolling onClick={handleClick}
                to="learn"
                spy={false}
                smooth={true}
                offset={-70}
                style={{padding: "10px 48px"}}>
            LEARN
            </Scrolling>
          </li>
          <li class="nav-item">
          <Scrolling onClick={handleClick}
                to="faqs"
                spy={false}
                smooth={true}
                offset={-70}
                style={{padding: "10px 48px"}}>
            FAQS
            </Scrolling>
          </li>
          <li class="nav-item">
          <Scrolling onClick={handleClick}
                to="contact"
                spy={false}
                smooth={true}
                offset={-70}
                style={{padding: "10px 48px"}}>
            CONTACT
            </Scrolling>
          </li>
        </List>
      </Navigation>

    </>
  );
};

export default MeatballButton;
