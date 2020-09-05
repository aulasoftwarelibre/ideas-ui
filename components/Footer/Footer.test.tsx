import { render, screen } from '@testing-library/react';
import React from 'react';

import { Props } from './Footer';
import { Default } from './Footer.stories';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Default {...(Default.args as Props)} />);
    expect(screen.getByTestId('footer'));
  });
});
