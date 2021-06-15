import React from 'react';
import Shoes from '../shoes.json';
import { useParams } from 'react-router';

const LaunchShoe = () => {
  const { id } = useParams();
  const shoe = Shoes[id];
  console.log(shoe);
  if (!shoe) {
    return <h2>Not found</h2>;
  }

  const { name, img, price } = shoe;
  return (
    <div>
      <h2>{name} </h2>
      <img src={img} alt={name} />
      <h2>{price} </h2>
    </div>
  );
};

export default LaunchShoe;
