import React, { useEffect } from 'react';
import * as moment from 'moment';
import * as momentTZ from 'moment-timezone';
import * as lodash from 'lodash';
import * as rxjs from 'rxjs';
import * as formik from 'formik';
import * as reactHookForm from 'react-hook-form';
import * as reactQuery from 'react-query';
import * as underscore from 'underscore';
import * as ramda from 'ramda';
import axios from 'axios';
import { ReactComponent as RocketImage } from '../../assets/images/rocket.svg';
import { ReactComponent as RocketTrailImage } from '../../assets/images/trail.svg';
import { ReactComponent as BigPlanetImage } from '../../assets/images/big-yellow-planet.svg';
import { ReactComponent as SmallPlanetImage } from '../../assets/images/small-blue-planet.svg';
import './Rocket.css';

const RocketComponent = () => {
  // component with performance bottleneck
  useEffect(() => {
    for (let i = 0; i < 100_000; i++) {
      console.log('hola');
    }
  }, []);

  return (
    <div className="rocket-wrapper">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RocketTrailImage className="rocket-trail" />
        <RocketImage className="rocket" width="100" height="100" />
      </div>
      <BigPlanetImage className="big-planet" />
      <SmallPlanetImage className="small-planet" />
    </div>
  );
};

export default RocketComponent;
