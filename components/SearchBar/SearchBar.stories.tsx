import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Props, SearchBar } from './SearchBar';

export default {
  title: "MainPage/SearchBar",
  component: SearchBar,
};

const Template: Story<Props> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = { criteria: "" };
