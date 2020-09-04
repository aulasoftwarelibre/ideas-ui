import { screen } from '@testing-library/react';
import React from 'react';

import { renderMockRouter } from '../../utils/test-utils';
import { Props } from './ProfileLink';
import { Active, Default } from './ProfileLink.stories';

describe("ProfileLink", () => {
  it("should be rendered correctly", () => {
    renderMockRouter(<Default {...(Default.args as Props)} />, {
      router: { pathname: "/active" },
    });

    expect(screen.getByTestId("profile-link"));
  });

  it("should be rendered correctly when current is enabled", () => {
    renderMockRouter(<Active {...(Active.args as Props)} />, {
      router: { pathname: "/active" },
    });

    expect(screen.getByTestId("active-profile-link"));
  });
});
