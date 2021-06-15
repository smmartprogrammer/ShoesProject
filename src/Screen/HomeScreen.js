import React from 'react';
import './HomeScreen.css';
import LaunchIndex from './LaunchIndex';

function HomeScreen() {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Welcome to Home</h2>
      {/* <div className="homescreen__products"> */}
      {/* <h1></h1> */}
      {/* <LaunchIndex /> */}
      <img src="https://cdn.techinasia.com/wp-content/uploads/2014/09/pakistan-startup-markhor-shoes-kickstarter-funding-3.jpg" />
      {/* </div> */}
    </div>
  );
}

export default HomeScreen;
