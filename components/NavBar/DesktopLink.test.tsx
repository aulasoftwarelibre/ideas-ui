import { screen } from '@testing-library/react';
import React from 'react';

import { renderMockRouter } from '../../utils/test-utils';
import { Props } from './DesktopLink';
import { Active, Default } from './DesktopLink.stories';

describe("DesktopLink", () => {
  it("should be rendered correctly", () => {
    renderMockRouter(<Default {...(Default.args as Props)} />, {
      router: { pathname: "/active" },
    });

    expect(screen.getByTestId("desktop-link"));
  });

  it("should be rendered correctly when current is enabled", () => {
    renderMockRouter(<Active {...(Active.args as Props)} />, {
      router: { pathname: "/active" },
    });

    expect(screen.getByTestId("active-desktop-link"));
  });
});
