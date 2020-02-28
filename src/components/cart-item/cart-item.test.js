import React from "react";
import { shallow } from "enzyme";

import CartItem from "./cart-item.component";

describe("CartItem tests", () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: "www.someimage.com",
        days: 2,
        name: "item test",
        quantity: 1
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem
    };

    wrapper = shallow(<CartItem {...mockProps} />);
  });

  it("should render CartItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call clearItem when remove button is clicked", () => {
    wrapper.find(".remove").simulate("click");
    expect(mockClearItem).toHaveBeenCalled();
  });

  it("should call addItem when left arrow is clicked", () => {
    wrapper
      .find(".quantity")
      .childAt(0)
      .simulate("click");

    expect(mockAddItem).toHaveBeenCalled();
  });

  it("should call removeItem when right arrow is clicked", () => {
    wrapper
      .find(".quantity")
      .childAt(2)
      .simulate("click");

    expect(mockRemoveItem).toHaveBeenCalled();
  });
});
