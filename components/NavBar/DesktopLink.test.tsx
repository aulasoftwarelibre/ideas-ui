import * as React from 'react';

import { mountMockRouter, renderMockRouter } from '../../utils/test-utils';
import DesktopLink from './DesktopLink';

describe("DesktopLink", () => {
  it("should be rendered correctly", () => {
    const { asFragment } = renderMockRouter(
      <DesktopLink path="/no-active" label="Profile" />,
      {
        router: { pathname: "/active" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should be rendered correctly when current is enabled", () => {
    const { asFragment } = renderMockRouter(
      <DesktopLink path="/active" label="Profile" />,
      {
        router: { pathname: "/active" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should be a link", () => {
    const wrapper = mountMockRouter(
      <DesktopLink path="/active" label="Profile" />,
      {
        router: { pathname: "/" },
      }
    );

    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("should be a span when active", () => {
    const wrapper = mountMockRouter(
      <DesktopLink path="/active" label="Profile" />,
      {
        router: { pathname: "/active" },
      }
    );

    expect(wrapper.find("span")).toHaveLength(1);
  });
});
