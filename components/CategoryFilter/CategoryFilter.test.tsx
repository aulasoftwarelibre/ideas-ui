import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CategoryFilter from "./CategoryFilter";
import { categories } from "./CategoryFilter.stories";

describe("CategoryFilter", () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });
  it("should be rendered correctly", () => {
    render(
      <CategoryFilter categories={categories} onChangeHandler={onChangeMock} />
    );
    expect(screen.getByTestId("category-filter"));
  });
});
