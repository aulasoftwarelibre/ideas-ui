import React from "react";

import { withKnobs, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import IdeaCard from ".";
import { Idea } from "../../model/idea/idea";

export default {
  title: "Activity Card",
  component: IdeaCard,
  decorators: [withKnobs],
};

const todayDate = Date.now();

const idea: Idea = {
  title: "Activity title",
  group: "Organization",
  category: "Category",
  startsAt: new Date(todayDate),
  online: true,
  attendess: [{}, {}, {}, {}, {}],
  image: "https://source.unsplash.com/featured/?tech",
};

export const Online = () => (
  <IdeaCard idea={object("Idea", idea)} onClick={action("clicked")}></IdeaCard>
);

export const Presencial = () => (
  <IdeaCard
    idea={object("Idea", { ...idea, online: false })}
    onClick={action("clicked")}
  ></IdeaCard>
);
