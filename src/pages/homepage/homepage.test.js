import React from "react";
import { shallow } from "enzyme";

import HomePage from "./homepage.component";

describe("Homepage tests", () => {
  it("should render Homepage component", () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
