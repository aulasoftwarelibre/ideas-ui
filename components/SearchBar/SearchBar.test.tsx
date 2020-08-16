import { shallow } from "enzyme";
import React from "react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  const onClickMock = jest.fn();
  const component = shallow(<SearchBar onClick={onClickMock}></SearchBar>);

  it("should be rendered correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be clickable", () => {
    component.find("#search-tool").simulate("click");

    expect(onClickMock).toHaveBeenCalled();
  });
});
