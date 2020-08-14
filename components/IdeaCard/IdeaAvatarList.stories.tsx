import React from "react";

import { withKnobs, object } from "@storybook/addon-knobs";

import { User } from "../../model/user/auth";
import IdeaAvatarList from "./IdeaAvatarList";
import faker from "faker";

export default {
  title: "Ideacard/IdeaAvatarList",
  component: IdeaAvatarList,
  decorators: [withKnobs],
};

const avatarAttendess: User[] = [
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
];
const emptyAvatarAttendess: User[] = [{}, {}, {}, {}];

export const AvatarAttendess = () => (
  <IdeaAvatarList attendess={avatarAttendess}></IdeaAvatarList>
);

export const NoAvatarAttendess = () => (
  <IdeaAvatarList attendess={emptyAvatarAttendess}></IdeaAvatarList>
);

export const Empty = () => <IdeaAvatarList attendess={[]}></IdeaAvatarList>;
