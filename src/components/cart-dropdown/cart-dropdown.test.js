import React from "react";
import { shallow } from "enzyme";

import CartDropdown from "./cart-dropdown.component";

describe("CartDropdown tests", () => {
  let wrapper;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    wrapper = shallow(<CartDropdown cartItems={mockCartItems} />);
  });

  it("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
