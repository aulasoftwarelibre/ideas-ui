import { shallow } from "enzyme";
import React from "react";
import { User } from "../../model/user/auth";
import { IdeaAvatarList } from "./IdeaAvatarList";

describe("AvatarList", () => {

  const attendess: User[] = [{}, {}, {}];

  const component = shallow(
    <IdeaAvatarList attendess={attendess}></IdeaAvatarList>
  );

  it("should be rendered correctly", () => {
    expect(component).toMatchSnapshot();
  });
});