import { Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';

import GradientButton, { Props } from './GradientButton';

export default {
  title: "Components/GradientButton",
  component: GradientButton,
  argTypes: {
    children: { control: "text" },
  },
};

const Template: Story<PropsWithChildren<Props>> = (args) => (
  <GradientButton {...args} />
);

export const Default = Template.bind({});
Default.args = { children: "Grandient Button" };
