import { shallow } from "enzyme";
import React from "react";
import { User } from "../../model/user/auth";
import { IdeaAvatarList } from "./IdeaAvatarList";

describe("AvatarList", () => {
  const attendees: User[] = [{}, {}, {}];

  const component = shallow(
    <IdeaAvatarList attendees={attendees}></IdeaAvatarList>
  );

  it("should be rendered correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
