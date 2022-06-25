import React from 'react';
import { ReactComponent as RocketLoading } from '../../assets/images/launch.svg';
import './RocketLoader.css';

const RocketLoader = () => {
  return (
    <div className="rocket-loader pulse">
      <RocketLoading width="100" height="100" />
    </div>
  );
};

export default RocketLoader;
