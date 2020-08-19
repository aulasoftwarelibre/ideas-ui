import { screen } from '@testing-library/react';
import React from 'react';

import { renderMockRouter } from '../../utils/test-utils';
import { Active, Default } from './ProfileLink.stories';

describe("ProfileLink", () => {
  it("should be rendered correctly", () => {
    renderMockRouter(<Default {...Default.args} />, {
      router: { pathname: "/active" },
    });

    expect(screen.getByTestId("profile-link"));
  });

  it("should be rendered correctly when current is enabled", () => {
    renderMockRouter(<Active {...Active.args} />, {
      router: { pathname: "/active" },
    });

    expect(screen.getByTestId("active-profile-link"));
  });
});
