import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../shoes.json';
import './LaunchIndex.css';

const LaunchIndex = () => {
  return (
    <>
      {Object.keys(shoes).map((keyName) => {
        const shoeObj = shoes[keyName];
        return (
          // <Link to={`/launch/${keyName}`}>
          <div className="product" key={keyName}>
            <img src={shoeObj.img} alt="product image" />
            <div className="product__info">
              <p className="info__name"> {shoeObj.name} </p>
              <p className="info__price">{shoeObj.price}</p>
            </div>
            <Link to={`/launchShoe/${shoes}`} className="info_button">
              View
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default LaunchIndex;

{
  /* <Link to={`/launch/${slug}`}>
<h2>{name}</h2>
<img src={img} alt={name} />
<h2>{price}</h2>
</Link> */
}
