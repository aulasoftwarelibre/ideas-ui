import React from "react";

import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import GradientButton from ".";

export default {
  title: "Gradient Button",
  component: GradientButton,
};

export const Default = () => (
  <GradientButton onClick={action("clicked")}>
    {text("Text", "Gradient Button")}
  </GradientButton>
);
