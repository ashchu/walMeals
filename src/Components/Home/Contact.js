import React from "react";
import MiniHeader from "./MiniHeader.js";

function Contact(){
    return (
        <div id="contact" className="section">

            <div id="connect" className="text" >

            <MiniHeader title="contact" class="mini-contact" />

            <h2 id="fifthTitle" className="headerTitle">Connect With Us.</h2>
            <div className="circlePink" id="pink-bottom" />
            <div className="socials">
                <h3 style={{fontSize: "200%"}}>Follow along on our Instagram
                @<strong><a href="https://www.instagram.com/walmart/" target="_blank" style={{textDecoration: "none", color: "inherit"}}>walmart</a></strong>
                , Twitter
                @<strong><a href="https://twitter.com/walmart" target="_blank" style={{textDecoration: "none", color: "inherit"}}>walmart</a></strong> and
                TikTok @<strong><a href="http://tiktok.com/walmart" target="_blank" style={{textDecoration: "none", color: "inherit"}}>walmart</a></strong>. </h3>
            </div>
            </div>
        </div>
    );
}

export default Contact;
