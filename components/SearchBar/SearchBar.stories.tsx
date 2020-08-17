import { action } from '@storybook/addon-actions';
import React from 'react';

import { SearchBar } from './SearchBar';

export default {
  title: "Search Bar",
  component: SearchBar,
};

export const Default = () => (
  <SearchBar criteria="" onChange={action("clicked")}></SearchBar>
);
