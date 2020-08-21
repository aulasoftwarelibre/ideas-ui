import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { categories, Default } from "./CategoryFilter.stories";

describe("CategoryFilter", () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });
  it("should be rendered correctly", () => {
    render(<Default categories={categories} />);
    expect(screen.getByTestId("category-filter"));
  });

  it("should be the first by default", () => {
    render(<Default categories={categories} />);
    expect(screen.getByTestId("active-category-link")).toHaveTextContent(
      categories[0].label
    );
  });

  it("should change selected category when clicked", () => {
    render(<Default categories={categories} onChangeHandler={onChangeMock} />);
    fireEvent.click(screen.getAllByTestId("category-link")[0]);
    expect(screen.getAllByTestId("category-link")[0]).toHaveTextContent(
      categories[0].label
    );
    expect(screen.getByTestId("active-category-link")).toHaveTextContent(
      categories[1].label
    );
    expect(screen.getByTestId("category-filter"));
  });
});
