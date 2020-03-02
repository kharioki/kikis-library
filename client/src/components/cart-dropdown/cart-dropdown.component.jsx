import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItemContainer from "../cart-item/cart-item.container";

import { calculateTotals } from "../../utils/calculate-rate";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    {cartItems.length ? (
      <div className="checkout-header">
        <div className="book">
          <span>Book</span>
        </div>
        <div className="period">
          <span>No. of Days</span>
        </div>
        <div className="price">
          <span>Price</span>
        </div>
        <div className="action">
          <span>Remove</span>
        </div>
      </div>
    ) : (
      <span className="empty-message">
        You do not have any books in your basket!!
      </span>
    )}
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItemContainer key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    {cartItems && (
      <div className="total">TOTAL: ${calculateTotals(cartItems)}</div>
    )}
    <div className="cart-rates">
      <span>Book rates:</span>
      <span>Regular books: $1 first 2days, $1.5 thereafter, min $2</span>
      <span>Fiction books: $3 per day</span>
      <span>Novel books: $1 first 3days, $1.5 thereafter, min $4.5</span>
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
