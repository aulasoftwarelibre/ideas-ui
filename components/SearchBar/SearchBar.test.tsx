import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Default } from './SearchBar.stories';

describe("SearchBar", () => {
  const onClickMock = jest.fn();

  it("should be rendered correctly", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId("searchbar"));
  });

  it("should return changed criteria", () => {
    render(<Default {...Default.args} onChange={onClickMock} />);

    fireEvent.change(screen.getByTestId("searchbar-input"), {
      target: { value: "a" },
    });

    expect(onClickMock).toHaveBeenCalledWith("a");
  });
});
