import React from 'react';

import { renderMockRouter, screen } from '../../utils/test-utils';
import {
  Hidden,
  WithActiveLink,
  WithoutActiveLink,
} from './MobileMenu.stories';

describe("MobileMenu", () => {
  it("should be rendered without active link", () => {
    renderMockRouter(<WithoutActiveLink />, {
      router: { pathname: "/no-active" },
    });

    expect(screen.getByTestId("mobile-menu"));
    expect(screen.queryAllByTestId("active-mobile-link")).toHaveLength(0);
  });

  it("should be rendered with active link", () => {
    renderMockRouter(<WithActiveLink />, {
      router: { pathname: "/" },
    });

    expect(screen.getByTestId("mobile-menu"));
    expect(screen.queryAllByTestId("active-mobile-link")).toHaveLength(1);
  });

  it("should be hidden when menu is closed", () => {
    renderMockRouter(<Hidden />, {
      router: { pathname: "/" },
    });

    expect(screen.getByTestId("mobile-menu")).toHaveClass("sm:hidden");
  });
});
