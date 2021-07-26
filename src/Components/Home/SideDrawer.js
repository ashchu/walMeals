import React from 'react'
import {Link} from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Scrollchor to="#mission">Mission</Scrollchor>
        </li>
        <li>
          <Scrollchor to="#commInfo">Subscribe</Scrollchor>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer;
