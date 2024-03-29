import React from 'react';
import { ReactComponent as RocketImage } from '../../assets/images/rocket.svg';
import { ReactComponent as RocketTrailImage } from '../../assets/images/trail.svg';
import { ReactComponent as BigPlanetImage } from '../../assets/images/big-yellow-planet.svg';
import { ReactComponent as SmallPlanetImage } from '../../assets/images/small-blue-planet.svg';
import './Rocket.css';

const RocketComponent = () => {
  return (
    <div className="rocket-wrapper">
      <div>
        <RocketTrailImage className="rocket-trail" />
        <RocketImage className="rocket" width="100" height="100" />
      </div>
      <BigPlanetImage className="big-planet" />
      <SmallPlanetImage className="small-planet" />
    </div>
  );
};

export default RocketComponent;
