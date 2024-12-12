import React from 'react';

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-image" />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}

export default GoodsCard;