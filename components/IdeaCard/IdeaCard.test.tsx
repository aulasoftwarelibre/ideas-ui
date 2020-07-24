import { text } from "@storybook/addon-knobs";
import { shallow } from "enzyme";
import React from "react";
import { Idea } from "../../model/idea/idea";
import IdeaCard from "./IdeaCard";

const todayDate = Date.now();

describe("ActivityCard", () => {
  const onClickMock = jest.fn();

  const idea: Idea = {
    title: "Activity title",
    group: "Organization",
    category: "Category",
    startsAt: new Date(todayDate),
    online: true,
    attendess: [],
    image: "https://source.unsplash.com/featured/?tech",
  };
  const component = shallow(
    <IdeaCard idea={idea} onClick={onClickMock}>
      Activity Card
    </IdeaCard>
  );

  it("should be rendered correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be clickable", () => {
    component.simulate("click");

    expect(onClickMock).toHaveBeenCalled();
  });
});
