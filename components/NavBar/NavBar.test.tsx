import * as React from 'react';

import { Session } from '../../model/user/auth';
import NavBarContext from '../../state/navbar/NavBarContext';
import { mountMockRouter, renderMockRouter } from '../../utils/test-utils';
import NavBar from './NavBar';

const session: Session = {
  user: {
    name: "user",
    image:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
  },
};

describe("NavBar", () => {
  it("should render without session", () => {
    const { asFragment } = renderMockRouter(
      <NavBarContext.Provider
        value={{
          state: { hideMenu: true, hideProfile: true },
          dispatch: () => {},
        }}
      >
        <NavBar session={null} />
      </NavBarContext.Provider>,
      {
        router: { pathname: "/" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with session", () => {
    const { asFragment } = renderMockRouter(
      <NavBarContext.Provider
        value={{
          state: { hideMenu: true, hideProfile: true },
          dispatch: () => {},
        }}
      >
        <NavBar session={session} />
      </NavBarContext.Provider>,
      {
        router: { pathname: "/" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with mobile menu open", () => {
    const { asFragment } = renderMockRouter(
      <NavBarContext.Provider
        value={{
          state: { hideMenu: false, hideProfile: true },
          dispatch: () => {},
        }}
      >
        <NavBar session={session} />
      </NavBarContext.Provider>,
      {
        router: { pathname: "/" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with profile menu open", () => {
    const { asFragment } = renderMockRouter(
      <NavBarContext.Provider
        value={{
          state: { hideMenu: true, hideProfile: false },
          dispatch: () => {},
        }}
      >
        <NavBar session={session} />
      </NavBarContext.Provider>,
      {
        router: { pathname: "/" },
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
