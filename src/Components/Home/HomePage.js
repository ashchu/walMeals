import React from 'react';
import './assets/stylesheet/stylesheet.css';
import './assets/stylesheet/home.css';
import './assets/stylesheet/home-mobile.css';
import { Link } from 'react-router-dom';
import Landing from './Landing.js';
import About from './About.js';
import Try from './Try.js';
import Learn from './Learn.js';
import CircleSpacer from './CircleSpacer.js';
import FAQ from './FAQ.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';
import ScrollToTop from './ScrollToTop';
import MeatballButton from './MeatballButton';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
    };
  }

 render() {
    return (
        <div>
            <MeatballButton />
            <Helmet>
              <link rel="icon" type="image/png" href={"https://icon-library.com/images/walmart-icon/walmart-icon-11.jpg"} sizes="16x16" />
              <title>WalMeals</title>
            </Helmet>

            <Landing />

            <div className="content">

                <About />

                <Try />

                <Learn />

                <CircleSpacer />

                <FAQ />

                <Contact />

                <section class="signup-section" id="signup">
                  <div class="container">
                      <div class="row">
                        {/* col-md-10 col-lg-8 */}
                          <div class="flex col-sm-6 mx-auto text-center justify-content-center">

                              <div class="form-container">
                                <form action="https://nyc.us1.list-manage.com/subscribe/post?u=a5aa3643fc82c9d63b1718912&amp;id=8dd23f6ac1" method="POST" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate class="form-inline">
                                    <input type="hidden" name="u" value="eb05e4f830c2a04be30171b01"/>
                                    <input type="hidden" name="id" value="8281a64779"/>
                                    <input
                                        type="email"
                                        name="EMAIL"
                                        id="MERGE0"
                                        value={this.state.emailValue}
                                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                                        autoCapitalize="off"
                                        autoCorrect="off"
                                        placeholder="Enter your email"
                                        style={{color: "black", fontWeight: "bold"}}
                                        class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0 styled-form"
                                    />
                                    <button class="submit-theme btn-primary btn mx-auto" type="submit" style={{color: "black", backgroundColor: "white", width: "6em", borderRadius: "10px", fontWeight: "bold"}}>Join</button>
                                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                                        <label htmlFor="b_email">Email: </label>
                                        <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>
                                    </div>
                                </form>
                            </div>

                              <p>Contact us directly <a style={{color : "lightblue"}}href="https://walmart.com">here</a></p>
                          </div>
                      </div>
                  </div>
              </section>

            </div>
            <div class="foot">
              <div class="homeFooter">
              <Footer />
            </div>
          </div>

        </div>
    )
  }
}

export default HomePage;
