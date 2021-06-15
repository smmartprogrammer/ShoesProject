import React from 'react';
import Shoes from '../shoes.json';
import { useParams } from 'react-router';
import './LaunchShoe.css';

const LaunchShoe = () => {
  const { id } = useParams();
  const shoe = Shoes[id];
  console.log(shoe);
  if (!shoe) {
    return <h2>Not found</h2>;
  }

  const { name, img, price } = shoe;

  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left__image">
          <img src={img} alt="product image" />
        </div>
        <div className="left__info">
          <p className="left__name">{name}</p>
          <p>
            Price: <span>{price}</span>
          </p>
          <p>{id}</p>
        </div>
      </div>
      <div className="productscreen_right">
        <div className="right__info">
          <p>
            Price: <span>{price}</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty{' '}
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchShoe;
