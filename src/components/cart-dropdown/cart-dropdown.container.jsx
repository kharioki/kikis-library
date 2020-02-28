import { connect } from "react-redux";

import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

const CartDropdownContainer = connect(mapStateToProps)(CartDropdown);

export default CartDropdownContainer;
