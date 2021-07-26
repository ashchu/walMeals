import React from 'react';
import './front.svg';

import Wall from './Constants/Wall.png';
import TextSection from './TextSection.js';
import PictureSection from './PictureSection.js';
import WallImage from './WallImage.js';

import {actives} from './Constants/members.js';
import {leadership} from './Constants/members.js'
import {projectLeaders} from './Constants/members.js';
import { Helmet } from 'react-helmet';


function App() {

  return (
    <div className="App">
      <Helmet>
        <title>Inertia | About Us</title>
      </Helmet>

      <WallImage />

      <TextSection />

    </div>
  );
}

export default App;
