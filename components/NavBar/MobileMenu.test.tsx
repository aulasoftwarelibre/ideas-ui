import React from 'react';

import { renderMockRouter, screen } from '../../utils/test-utils';
import { Props } from './MobileMenu';
import { Hidden, WithActiveLink, WithoutActiveLink } from './MobileMenu.stories';

describe("MobileMenu", () => {
  it("should be rendered without active link", () => {
    renderMockRouter(
      <WithoutActiveLink {...(WithoutActiveLink.args as Props)} />,
      {
        router: { pathname: "/no-active" },
      }
    );

    expect(screen.getByTestId("mobile-menu"));
    expect(screen.queryAllByTestId("active-mobile-link")).toHaveLength(0);
  });

  it("should be rendered with active link", () => {
    renderMockRouter(<WithActiveLink {...(WithActiveLink.args as Props)} />, {
      router: { pathname: "/" },
    });

    expect(screen.getByTestId("mobile-menu"));
    expect(screen.queryAllByTestId("active-mobile-link")).toHaveLength(1);
  });

  it("should be hidden when menu is closed", () => {
    renderMockRouter(<Hidden {...(Hidden.args as Props)} />, {
      router: { pathname: "/" },
    });

    expect(screen.getByTestId("mobile-menu")).toHaveClass("sm:hidden");
  });
});
