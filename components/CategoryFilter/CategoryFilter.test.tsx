import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Props } from './CategoryFilter';
import { categories, Default } from './CategoryFilter.stories';

describe('CategoryFilter', () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });
  it('should be rendered correctly', () => {
    render(<Default {...(Default.args as Props)} />);
    expect(screen.getByTestId('category-filter'));
  });

  it('should be the first by default', () => {
    render(<Default {...(Default.args as Props)} />);
    expect(screen.getByTestId('active-category-link')).toHaveTextContent(
      categories[0].label
    );
  });

  it('should change selected category when clicked', () => {
    render(
      <Default {...(Default.args as Props)} onChangeHandler={onChangeMock} />
    );
    fireEvent.click(screen.getAllByTestId('category-link')[0]);
    expect(screen.getAllByTestId('category-link')[0]).toHaveTextContent(
      categories[0].label
    );
    expect(screen.getByTestId('active-category-link')).toHaveTextContent(
      categories[1].label
    );
    expect(screen.getByTestId('category-filter'));
  });
});
