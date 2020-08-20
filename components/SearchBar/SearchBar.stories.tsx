import { action } from '@storybook/addon-actions';
import React from 'react';

import { Props, SearchBar } from './SearchBar';

export default {
  title: "MainPage/SearchBar",
  component: SearchBar,
};

const Template = (args: Props) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = { criteria: "" };
