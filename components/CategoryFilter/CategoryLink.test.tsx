import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CategoryLink from "./CategoryLink";

describe("CategoryLink", () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    onClickMock.mockClear();
  });
  it("should be rendered correctly", () => {
    render(
      <CategoryLink label="label" isSelected={true} onClick={onClickMock} />
    );
    expect(screen.getByTestId("active-category-link"));
  });

  it("should be rendered correctly", () => {
    render(
      <CategoryLink label="label" isSelected={false} onClick={onClickMock} />
    );
    expect(screen.getByTestId("category-link"));
  });

  it("should be clickable when it is not selected", () => {
    render(
      <CategoryLink label="label" isSelected={false} onClick={onClickMock} />
    );
    fireEvent.click(screen.getByTestId("category-link"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should not be clickable when it is selected", () => {
    render(
      <CategoryLink label="label" isSelected={true} onClick={onClickMock} />
    );
    fireEvent.click(screen.getByTestId("active-category-link"));
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
