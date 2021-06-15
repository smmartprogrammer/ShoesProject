import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import '../Component/Navbar.css';
import HomeScreen from '../Screen/HomeScreen';
import Launch from '../Screen/Launch';
import LaunchIndex from '../Screen/LaunchIndex';
import LaunchShoe from '../Screen/LaunchShoe';
import Notfound from '../Screen/Notfound';

export default function AppRouter() {
  return (
    <Router>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        {/* <Route path="/" element={<HomeScreen />} />
        <Route path="/launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":keyName" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<Notfound />} /> */}
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/launchindex" element={<LaunchIndex />} />
        <Route exact path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
