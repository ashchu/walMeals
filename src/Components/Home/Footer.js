import React from 'react';
import insta from "./assets/images/instagram.png";
import twitter from "./assets/images/twitter.png";
import tiktok from "./assets/images/tiktok.png"

function Footer() {
    return (
        <footer className="Footer">
          <div className="footerContainer">
            <div className="FooterItems">
              <a href="https://www.instagram.com/walmart/" target="_blank">
                  <img src={insta} />
              </a>
              <a href="http://tiktok.com/@walmart" target="_blank">
                <img src={tiktok}/>
              </a>
              <a href="https://twitter.com/walmart" target="_blank">
                  <img src={twitter}/>
              </a>
            </div>
            <p className="footerText" style={{textAlign: 'center'}} >made with ❤️ by <a href="https://ashchu.github.io">Ashley Chu</a></p>
            </div>
        </footer>

    )
}

export default Footer;
