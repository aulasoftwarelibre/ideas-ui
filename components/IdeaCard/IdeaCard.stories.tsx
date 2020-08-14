import React from "react";

import { withKnobs, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import IdeaCard from ".";
import { Idea } from "../../model/idea/idea";

export default {
  title: "Ideacard/IdeaCard",
  component: IdeaCard,
  decorators: [withKnobs],
};

const todayDate = Date.now();

const idea: Idea = {
  title: "Idea title",
  group: "Organization",
  category: "Category",
  startsAt: new Date(todayDate),
  online: true,
  attendees: [{}, {}, {}, {}, {}],
  image:
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
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
