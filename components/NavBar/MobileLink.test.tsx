import { screen } from '@testing-library/react';
import React from 'react';

import { renderMockRouter } from '../../utils/test-utils';
import { Active, Default } from './MobileLink.stories';

describe("MobileLink", () => {
  it("should be rendered correctly", () => {
    renderMockRouter(<Default {...Default.args} />, {
      router: { pathname: "/active" },
    });

    expect(screen.getByTestId("mobile-link"));
  });

  it("should be rendered correctly when current is enabled", () => {
    renderMockRouter(<Active {...Active.args} />, {
      router: { pathname: "/active" },
    });

    expect(screen.getByTestId("active-mobile-link"));
  });
});
