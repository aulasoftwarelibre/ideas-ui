import React from "react";
import CategoryFilter, { Props } from "./CategoryFilter";
import faker from "faker";
import { Category } from "../../model/category/category";

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
};

const Template = (args: Props) => <CategoryFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: categories,
};
