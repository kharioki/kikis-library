import { connect } from "react-redux";

import "./cart-icon.styles.scss";

import CartIcon from "./cart-icon.component";

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
});

const CartIconContainer = connect(mapStateToProps)(CartIcon);

export default CartIconContainer;
