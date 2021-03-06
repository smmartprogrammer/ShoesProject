import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../shoes.json';
import './LaunchIndex.css';

const LaunchIndex = () => {
  return (
    <>
      <div className="homescreen">
        <h2 className="homescreen__title">Welcome to Product</h2>

        <div className="homescreen__products">
          {Object.keys(shoes).map((keyName) => {
            const shoeObj = shoes[keyName];
            return (
              <div className="product" key={keyName}>
                <img src={shoeObj.img} alt="product image" />
                <div className="product__info">
                  <p className="info__name"> {shoeObj.name} </p>
                  <p className="info__price">{shoeObj.price}</p>
                </div>

                <Link to={`/launchIndex/${keyName}`} className="info_button">
                  View
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default LaunchIndex;
