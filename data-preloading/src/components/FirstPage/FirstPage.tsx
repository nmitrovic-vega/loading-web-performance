import React from 'react';
import logo from '../../assets/images/omega.png';
import astronaut from '../../assets/images/astronaut.jpg';

const FirstPage = ({ children }: any) => {
  return (
    <>
      <div className="section section--first">
        <img src={logo} className="omega__logo" alt="logo" />
      </div>
      <div className="section section--second">
        <img src={astronaut} className="omega__logo" alt="logo" />
      </div>
      {children}
    </>
  );
};

export default FirstPage;
