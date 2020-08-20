import React from "react";
import { action } from "@storybook/addon-actions";
import Category from "../../model/category/category";
import CategoryFilter from "./CategoryFilter";

export default {
  title: "CategoryFilter/CategoryFilter",
  component: CategoryFilter,
};

export const categories: Category[] = [
  { label: "Todos" },
  { label: "Diseño" },
  { label: "Desarrollo Web" },
  { label: "Digital" },
  { label: "Hardware" },
  { label: "Machine Learning" },
  { label: "Kata" },
];

export const Default = () => (
  <CategoryFilter
    categories={categories}
    onChangeHandler={() => categories[0]}
  ></CategoryFilter>
);
