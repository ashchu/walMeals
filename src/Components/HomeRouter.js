import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

import HomePage from './Home/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs/AboutUs.js';
import './Home/assets/stylesheet/Navbar.css';
import './AboutUs/css/Footer.css';
import './Home/assets/stylesheet/home.css';


import Backdrop from './Home/Backdrop';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
history.listen(location => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})

class HomeRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false
        };
    }

    componentDidMount() {
          ReactGA.pageview(window.location.pathname)
      }

    
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        return (
            <div>
                <Backdrop />
                <HomePage />
            </div>

        );
    }
}

export default HomeRouter;