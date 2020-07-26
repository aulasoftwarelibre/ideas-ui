import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';

import GradientButton from '.';

export default {
  title: "Gradient Button",
  component: GradientButton,
};

export const Default = () => (
  <GradientButton onClick={action("clicked")}>
    {text("Text", "Gradient Button")}
  </GradientButton>
);
