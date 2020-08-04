import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import { Session } from '../../model/user/auth';
import NavBarContext from '../../state/navbar/NavBarContext';
import NavBar from './NavBar';

export default {
  component: NavBar,
  title: "Navbar/NavBar",
  decorators: [withNextRouter],
};

const session: Session = {
  user: {
    name: "user",
    image:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
  },
};

export const DesktopWithoutSession = () => {
  return <NavBar session={null} />;
};

export const DesktopWithSession = () => {
  return <NavBar session={session} />;
};

export const DesktopWithProfile = () => {
  return (
    <NavBarContext.Provider
      value={{
        state: { hideMenu: true, hideProfile: true },
        dispatch: () => {},
      }}
    >
      <NavBar session={session} />
    </NavBarContext.Provider>
  );
};

export const MobileWithoutSession = () => {
  return <NavBar session={null} />;
};

MobileWithoutSession.story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const MobileWithSession = () => {
  return <NavBar session={session} />;
};

MobileWithSession.story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const MobileWithMenu = () => {
  return (
    <NavBarContext.Provider
      value={{
        state: { hideMenu: false, hideProfile: true },
        dispatch: () => {},
      }}
    >
      <NavBar session={session} />
    </NavBarContext.Provider>
  );
};

MobileWithMenu.story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const MobileWithProfile = () => {
  return (
    <NavBarContext.Provider
      value={{
        state: { hideMenu: true, hideProfile: false },
        dispatch: () => {},
      }}
    >
      <NavBar session={session} />
    </NavBarContext.Provider>
  );
};

MobileWithProfile.story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
