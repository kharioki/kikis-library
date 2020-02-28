import React from "react";
import { shallow } from "enzyme";

import CartIcon from "./cart-icon.component";

describe("CartIcon tests", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      itemCount: 0
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it("should render CartIcon component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
