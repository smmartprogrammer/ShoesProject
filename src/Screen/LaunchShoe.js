import React from 'react';
import Shoes from '../shoes.json';
import { useParams } from 'react-router';

const LaunchShoe = () => {
  const { slug } = useParams();
  const shoe = Shoes[slug];

  if (!shoe) {
    return <h2>Not found</h2>;
  }

  const { name, img, price } = shoe;
  return (
    <div>
      <h2>{name} </h2>
      <img src={img} alt={name} />
      {slug}
    </div>
  );
};

export default LaunchShoe;
