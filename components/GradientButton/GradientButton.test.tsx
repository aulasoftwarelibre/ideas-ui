import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Default } from './GradientButton.stories';

describe('GradientButton', () => {
  const onClickMock = jest.fn();

  it('should be rendered correctly', () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId('gradient-button'));
  });

  it('should be clickable', () => {
    render(<Default {...Default.args} onClick={onClickMock} />);
    fireEvent.click(screen.getByTestId('gradient-button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
