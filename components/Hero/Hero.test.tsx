import { render, screen } from '@testing-library/react';
import React from 'react';

import { Default } from './Hero.stories';

describe('Hero', () => {
  it('should render correctly', () => {
    render(<Default />);
    expect(screen.getByTestId('hero'));
  });
});
