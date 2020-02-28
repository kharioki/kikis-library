import React from "react";
import { shallow } from "enzyme";

import Header from "./header.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

describe("Header component", () => {
  let wrapper = shallow(<Header />);

  it("should render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not show cart dropdown by default", () => {
    expect(wrapper.exists(CartDropdown)).toBe(false);
  });
});
