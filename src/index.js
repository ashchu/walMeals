import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeRouter from './Components/HomeRouter';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize('G-TK1XZJM0V2');

ReactDOM.render(
  <React.StrictMode>
    <HomeRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
