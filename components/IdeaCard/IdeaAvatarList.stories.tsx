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

const avatarAttendees: User[] = [
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
];
const emptyAvatarAttendees: User[] = [{}, {}, {}, {}];

export const AvatarAttendees = () => (
  <IdeaAvatarList attendees={avatarAttendees}></IdeaAvatarList>
);

export const NoAvatarAttendees = () => (
  <IdeaAvatarList attendees={emptyAvatarAttendees}></IdeaAvatarList>
);

export const Empty = () => <IdeaAvatarList attendees={[]}></IdeaAvatarList>;
