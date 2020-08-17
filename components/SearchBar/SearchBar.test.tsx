import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import SearchBar from './SearchBar';

describe("SearchBar", () => {
  const onClickMock = jest.fn();
  const component = render(
    <SearchBar criteria="" onChange={onClickMock}></SearchBar>
  );

  it("should be rendered correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should return changed criteria", () => {
    const { getByTestId } = render(
      <SearchBar criteria="" onChange={onClickMock}></SearchBar>
    );

    getByTestId("searchbar");

    fireEvent.change(getByTestId("searchbar-input"), {
      target: { value: "a" },
    });

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith("a");
  });
});
