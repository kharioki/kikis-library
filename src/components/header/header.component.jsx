import React, { useState } from "react";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="header">
      <Logo className="logo" />
      <div className="options">
        <CartIcon onClick={() => setHidden(!hidden)} />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
