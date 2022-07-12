import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/omega.png';
import astronaut from '../../assets/images/astronaut.jpg';

const FirstPage = () => {
  return (
    <>
      <div className="section section--first">
        <img src={logo} className="omega__logo" alt="logo" />
      </div>
      <div className="section section--second">
        <img src={astronaut} className="omega__logo" alt="logo" />
      </div>
      <Link to="rocket">Go to Rocket Loader</Link>
    </>
  );
};

export default FirstPage;
