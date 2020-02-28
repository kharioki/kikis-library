import React from "react";
import { shallow } from "enzyme";

import Collection from "./collection.component";
import CollectionItemContainer from "../collection-item/collection-item.container";

describe("Collection tests", () => {
  let wrapper;
  const mockItems = [
    {
      id: 1,
      name: "name1",
      imageUrl: "www.image.com"
    },
    {
      id: 2,
      name: "name2",
      imageUrl: "www.image.com"
    },
    {
      id: 3,
      name: "name3",
      imageUrl: "www.image.com"
    }
  ];

  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: "Test"
    };

    wrapper = shallow(<Collection collection={mockCollection} />);
  });

  it("should render Collection component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the same number of CollectionItems as collection array", () => {
    expect(wrapper.find(CollectionItemContainer).length).toBe(mockItems.length);
  });
});
