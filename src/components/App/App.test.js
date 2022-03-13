import { shallow } from "enzyme";
import React from "react";
import App from "./App";

test("renders without failing", () => {
  let wrapper = shallow(<App />);

  expect(wrapper).toBeDefined();
});
