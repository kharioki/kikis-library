import React from "react";

import "./cart-item.styles.scss";

import { calculateRate } from "../../utils/calculate-rate";

const CartItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, days } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="quantity">
        <span
          className="arrow"
          role="img"
          aria-label="add"
          onClick={() => addItem(cartItem)}
        >
          &#10133;
        </span>
        <span className="value">{days}</span>
        <span
          className="arrow"
          role="img"
          aria-label="minus"
          onClick={() => removeItem(cartItem)}
        >
          &#10134;
        </span>
      </span>
      <span className="price">$ {calculateRate(days, 1)}</span>
      <span
        className="remove-button"
        role="img"
        aria-label="minus"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CartItem;
