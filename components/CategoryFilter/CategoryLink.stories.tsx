import React from "react";

import { action } from "@storybook/addon-actions";
import CategoryLink from "./CategoryLink";

export default {
  component: CategoryLink,
  title: "CategoryFilter/CategoryLink",
};

export const Selected = () => {
  return (
    <CategoryLink label="Label" isSelected={true} onClick={action("click")} />
  );
};

export const IsNotSelected = () => {
  return (
    <CategoryLink label="Label" isSelected={false} onClick={action("click")} />
  );
};
