import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';

import GradientButton, { Props } from './GradientButton';

export default {
  title: "Gradient Button",
  component: GradientButton,
  argTypes: {
    children: { control: "text" },
  },
};

const Template = (args: Props) => <GradientButton {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Grandient Button" };
