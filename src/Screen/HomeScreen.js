import React from 'react';
import './HomeScreen.css';
import LaunchIndex from './LaunchIndex';

function HomeScreen() {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        <LaunchIndex />
      </div>
    </div>
  );
}

export default HomeScreen;
