import React from 'react';

import { renderMockRouter, screen } from '../../utils/test-utils';
import { WithActiveLink, WithoutActiveLink } from './DesktopMenu.stories';

describe('DesktopMenu', () => {
  it('should be rendered without active link', () => {
    renderMockRouter(<WithoutActiveLink />, {
      router: { pathname: '/no-active' },
    });

    expect(screen.getByTestId('desktop-menu'));
    expect(screen.queryAllByTestId('active-desktop-link')).toHaveLength(0);
  });

  it('should be rendered with active link', () => {
    renderMockRouter(<WithActiveLink />, {
      router: { pathname: '/' },
    });

    expect(screen.getByTestId('desktop-menu'));
    expect(screen.queryAllByTestId('active-desktop-link')).toHaveLength(1);
  });
});
