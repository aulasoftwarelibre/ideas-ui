import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import { Session } from '../../model/user/auth';
import NavBarContext from '../../state/navbar/NavBarContext';
import NavBar, { Props } from './NavBar';

export default {
  component: NavBar,
  title: "Navbar/NavBar",
  decorators: [withNextRouter],
} as Meta;

const session: Session = {
  user: {
    name: "user",
    image:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
  },
};

const Template: Story<Props> = (args) => <NavBar {...args} />;

export const DesktopWithoutSession = Template.bind({});
DesktopWithoutSession.args = {
  session: undefined,
};

export const DesktopWithSession = Template.bind({});
DesktopWithSession.args = {
  session,
};

export const DesktopWithProfile = () => {
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

export const MobileWithoutSession = Template.bind({});
MobileWithoutSession.args = {
  session: undefined,
};
MobileWithoutSession.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

export const MobileWithSession = Template.bind({});
MobileWithSession.args = {
  session,
};
MobileWithSession.parameters = {
  viewport: {
    defaultViewport: "mobile1",
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
