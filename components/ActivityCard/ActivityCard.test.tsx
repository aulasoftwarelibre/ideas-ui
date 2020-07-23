import { text } from "@storybook/addon-knobs";
import { shallow } from "enzyme";
import React from "react";
import ActivityCard from "./ActivityCard";

const todayDate = Date.now();

describe("ActivityCard", () => {
  const onClickMock = jest.fn();
  const component = shallow(
    <ActivityCard
      title="Activity title"
      group="Organization"
      category="Category"
      starts_at={new Date(todayDate)}
      online={true}
      image="https://source.unsplash.com/featured/?tech"
      onClick={onClickMock}
    >
      Activity Card
    </ActivityCard>
  );

  it("should be rendered correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be clickable", () => {
    component.simulate("click");

    expect(onClickMock).toHaveBeenCalled();
  });
});
