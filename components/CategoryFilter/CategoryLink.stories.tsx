import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import CategoryLink, { Props } from './CategoryLink';

export default {
  component: CategoryLink,
  title: "CategoryFilter/CategoryLink",
} as Meta;

const Template: Story<Props> = (args) => <CategoryLink {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  label: "Label",
  isSelected: true,
};

export const IsNotSelected = Template.bind({});
IsNotSelected.args = {
  label: "Label",
  isSelected: false,
};
