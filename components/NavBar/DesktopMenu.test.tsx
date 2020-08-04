import React from 'react';

import { renderMockRouter } from '../../utils/test-utils';
import DesktopMenu from './DesktopMenu';

describe("DesktopMenu", () => {
  it("should be rendered without active link", () => {
    const { asFragment } = renderMockRouter(<DesktopMenu />, {
      router: { pathname: "/no-active" },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should be rendered with active link", () => {
    const { asFragment } = renderMockRouter(<DesktopMenu />, {
      router: { pathname: "/" },
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
