import * as React from 'react';

import { renderMockRouter } from '../../utils/test-utils';
import MobileMenu from './MobileMenu';

describe("MobileMenu", () => {
  it("should be rendered without active link", () => {
    const { asFragment } = renderMockRouter(<MobileMenu hideMenu={false} />, {
      router: { pathname: "/no-active" },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should be rendered with active link", () => {
    const { asFragment } = renderMockRouter(<MobileMenu hideMenu={false} />, {
      router: { pathname: "/" },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should not be rendered when closed", () => {
    const { asFragment } = renderMockRouter(<MobileMenu hideMenu={true} />, {
      router: { pathname: "/" },
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
