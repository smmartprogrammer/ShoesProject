import React from 'react';
// import Product from '../Component/Product';
import { Outlet } from 'react-router-dom';
import './HomeScreen.css';
import Launch from './Launch';
import LaunchIndex from './LaunchIndex';

function HomeScreen() {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {/* <Product /> */}
        <Launch />
        {/* <LaunchIndex /> */}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default HomeScreen;
