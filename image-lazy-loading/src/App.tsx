import React from 'react';
import LazyImg from './components/LazyImg/LazyImg';
import RocketLoader from './components/RocketLoader/RocketLoader';

import logo from './assets/images/omega.png';
import galaxy from './assets/images/galaxy.jpeg';
import galaxyLight from './assets/images/galaxy-light.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="section section--first">
        <img src={logo} className="omega__logo" alt="logo" />
      </div>
      <div className="section section--second">
        <RocketLoader />
      </div>
      <img src={galaxy} />
      {/* <LazyImg
        src={galaxy}
        fallback={galaxyLight}
        className="omega__logo"
        alt="logo"
      /> */}
    </div>
  );
}

export default App;
