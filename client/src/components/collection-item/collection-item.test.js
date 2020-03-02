import React from "react";
import { shallow } from "enzyme";

import CollectionItem from "./collection-item.component";
import CustomButton from "../custom-button/custom-button.component";

describe("CollectionItem tests", () => {
  let wrapper;
  let mockAdd;
  const imageUrl = "www.someimage.com";
  const name = "some image";

  beforeEach(() => {
    mockAdd = jest.fn();

    const mockProps = {
      item: {
        name: name,
        imageUrl: imageUrl
      },
      addItem: mockAdd
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("should render CollectionItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call addItem when CustomButton clicked", () => {
    wrapper.find(CustomButton).simulate("click");
    expect(mockAdd).toHaveBeenCalled();
  });
});
