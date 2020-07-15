import { text } from "@storybook/addon-knobs";
import { shallow } from "enzyme";
import React from "react";
import GradientButton from "./GradientButton";

describe("GradientButton", () => {
  const onClickMock = jest.fn();
  const component = shallow(
    <GradientButton onClick={onClickMock}>Gradient Button</GradientButton>
  );

  it("should be rendered correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be clickable", () => {
    component.simulate("click");

    expect(onClickMock).toHaveBeenCalled();
  });
});
