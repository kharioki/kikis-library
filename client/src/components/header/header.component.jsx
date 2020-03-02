import React, { useState } from "react";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIconContainer from "../cart-icon/cart-icon.container";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="header">
      <Logo className="logo-container" />
      <div className="options">
        <CartIconContainer onClick={() => setHidden(!hidden)} />
      </div>
      {hidden ? null : <CartDropdownContainer />}
    </div>
  );
};

export default Header;
