import * as React from 'react';

import { mountMockRouter, renderMockRouter } from '../../utils/test-utils';
import ProfileMenu from './ProfileMenu';

describe("ProfileMenu", () => {
  it("should be rendered opened with session", () => {
    const { asFragment } = renderMockRouter(
      <ProfileMenu
        session={{ user: {} }}
        hideMenu={false}
        onClick={() => {}}
      />,
      {
        router: { pathname: "/" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should be rendered closed with session", () => {
    const { asFragment } = renderMockRouter(
      <ProfileMenu session={{ user: {} }} hideMenu={true} onClick={() => {}} />,
      {
        router: { pathname: "/" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should be rendered correctly without session", () => {
    const { asFragment } = renderMockRouter(
      <ProfileMenu session={null} hideMenu={false} onClick={() => {}} />,
      {
        router: { pathname: "/" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should open profile menu when click", () => {
    const mockOnClick = jest.fn();

    const wrapper = mountMockRouter(
      <ProfileMenu
        session={{ user: {} }}
        hideMenu={false}
        onClick={mockOnClick}
      />,
      {
        router: { pathname: "/" },
      }
    );

    wrapper.find("#user-menu").first().simulate("click");

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
