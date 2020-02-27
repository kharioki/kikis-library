import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, name, quantity = 1 } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow">&#10133;</div>
      <span className="value">{quantity}</span>
      <div className="arrow">&#10134;</div>
    </span>
    <span className="price">{quantity * 1}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CartItem;
