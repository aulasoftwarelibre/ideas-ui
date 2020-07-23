import React from "react";

import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ActivityCard from ".";

export default {
  title: "Activity Card",
  component: ActivityCard,
};

const todayDate = Date.now();

export const Online = () => (
  <ActivityCard
    title="Activity title"
    group="Organization"
    category="Category"
    starts_at={new Date(todayDate)}
    online={true}
    image="https://source.unsplash.com/featured/?tech"
    onClick={action("clicked")}
  ></ActivityCard>
);

export const Presencial = () => (
  <ActivityCard
    title="Activity title"
    group="Organization"
    category="Category"
    starts_at={new Date(todayDate)}
    online={false}
    image="https://source.unsplash.com/featured/?tech"
    onClick={action("clicked")}
  ></ActivityCard>
);
