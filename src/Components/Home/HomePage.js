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
import How from './How.js';
import Ashley from './Ashley.js';
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

                <How />

                <Try />

                <Learn />

                <FAQ />

                <Contact />

                <Ashley />

                <section class="signup-section" id="signup">
                  <div class="container">
                      <div class="row">
                        {/* col-md-10 col-lg-8 */}
                          <div class="flex col-sm-6 mx-auto text-center justify-content-center">


                              <p>Contact Walmart directly <a style={{color : "blue"}}href="https://walmart.com">here</a></p>
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
