import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

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
      <span>You do not have any books in your basket!!</span>
    )}
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    {cartItems && (
      <div className="total">TOTAL: ${calculateTotals(cartItems, 1)}</div>
    )}
    <div className="cart-rates">
      <span>Book rates:</span>
      <span>All books: $1 per day</span>
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
