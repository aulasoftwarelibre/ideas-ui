import React from 'react';

import { renderMockRouter, screen } from '../../utils/test-utils';
import { Props } from './ProfileMenu';
import {
  ClosedWithUserAvatar,
  OpenWithActiveLink,
  OpenWithUserAvatar,
} from './ProfileMenu.stories';

describe('ProfileMenu', () => {
  it('should be rendered closed with session', () => {
    renderMockRouter(
      <ClosedWithUserAvatar {...(ClosedWithUserAvatar.args as Props)} />,
      {
        router: { pathname: '/' },
      }
    );

    expect(screen.getByTestId('profile-menu'));
    expect(screen.getByTestId('profile-menu-box')).toHaveClass('hidden');
  });

  it('should be rendered opened with session', () => {
    renderMockRouter(
      <OpenWithUserAvatar {...(OpenWithUserAvatar.args as Props)} />,
      {
        router: { pathname: '/' },
      }
    );

    expect(screen.getByTestId('profile-menu'));
    expect(screen.getByTestId('profile-menu-box')).not.toHaveClass('hidden');
  });

  it('should be render active link', () => {
    renderMockRouter(
      <OpenWithActiveLink {...(OpenWithActiveLink.args as Props)} />,
      {
        router: { pathname: '/user/profile' },
      }
    );

    expect(screen.getByTestId('profile-menu'));
    expect(screen.getByTestId('profile-menu-box')).not.toHaveClass('hidden');
    expect(screen.queryAllByTestId('active-profile-link')).toHaveLength(1);
  });
});
