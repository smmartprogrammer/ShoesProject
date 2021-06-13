import React from 'react';
import { Outlet } from 'react-router-dom';
import LaunchIndex from './LaunchIndex';
import './LaunchIndex.css';

const Launch = () => {
  return (
    <div>
      <h1>Launch</h1>
      <LaunchIndex />
      <Outlet />
    </div>
  );
};

export default Launch;
