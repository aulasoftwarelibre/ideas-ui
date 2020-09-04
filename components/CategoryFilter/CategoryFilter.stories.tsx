import { Meta, Story } from '@storybook/react/types-6-0';
import faker from 'faker';
import React from 'react';

import { Category } from '../../model/category/category';
import CategoryFilter, { Props } from './CategoryFilter';

export const categories: Category[] = [
  { label: "Todos", id: faker.random.uuid() },
  { label: "Diseño", id: faker.random.uuid() },
  { label: "Desarrollo Web", id: faker.random.uuid() },
  { label: "Digital", id: faker.random.uuid() },
  { label: "Hardware", id: faker.random.uuid() },
  { label: "Machine Learning", id: faker.random.uuid() },
  { label: "Kata", id: faker.random.uuid() },
];

export default {
  title: "CategoryFilter/CategoryFilter",
  component: CategoryFilter,
  includeStories: ["Default"],
} as Meta;

const Template: Story<Props> = (args) => <CategoryFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: categories,
  onChangeHandler: (category: Category) => category,
} as Props;
