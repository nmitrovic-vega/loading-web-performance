import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import astronaut from '../../assets/images/astronaut.png';
import './FirstPage.css';

const FirstPage = () => {
  return (
    <div className="section section-first">
      <img src={astronaut} className="astronaut" alt="logo" />
      <div className="link-wrapper">
        <Button variant="contained" color="secondary">
          <Link to="rocket" style={{ color: 'white', textDecoration: 'none' }}>
            Go to Rocket Page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FirstPage;
