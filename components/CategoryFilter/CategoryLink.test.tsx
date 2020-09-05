import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Props } from './CategoryLink';
import { IsNotSelected, Selected } from './CategoryLink.stories';

describe('CategoryLink', () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it('should be clickable when it is not selected', () => {
    render(
      <IsNotSelected {...(IsNotSelected.args as Props)} onClick={onClickMock} />
    );

    expect(screen.getByTestId('category-link'));
    fireEvent.click(screen.getByTestId('category-link'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not be clickable when it is selected', () => {
    render(<Selected {...(Selected.args as Props)} onClick={onClickMock} />);

    expect(screen.getByTestId('active-category-link'));
    fireEvent.click(screen.getByTestId('active-category-link'));
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
