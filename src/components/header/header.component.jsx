import React from "react";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";

const Header = () => (
  <div className="header">
    <Logo className="logo" />
    <div className="options">
      <CartIcon />
    </div>
  </div>
);

export default Header;
