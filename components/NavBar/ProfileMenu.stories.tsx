import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import { Session } from '../../model/user/auth';
import ProfileMenu, { Props } from './ProfileMenu';

export default {
  component: ProfileMenu,
  title: "Navbar/ProfileMenu",
  decorators: [withNextRouter],
};

const session: Session = {
  user: {
    name: "user",
    image:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
  },
};

const Template = (args: Props) => (
  <div className="mx-auto flex float-right">
    <ProfileMenu {...args} />
  </div>
);

export const ClosedWithUserAvatar = Template.bind({});
ClosedWithUserAvatar.args = {
  session,
  hideMenu: true,
};

export const ClosedWithDefaultAvatar = Template.bind({});
ClosedWithDefaultAvatar.args = {
  session: { user: {} },
  hideMenu: true,
};

export const OpenWithUserAvatar = Template.bind({});
OpenWithUserAvatar.args = {
  session,
  hideMenu: false,
};

export const OpenWithDefaultAvatar = Template.bind({});
OpenWithDefaultAvatar.args = {
  session: { user: {} },
  hideMenu: false,
};

export const OpenWithActiveLink = Template.bind({});
OpenWithActiveLink.args = {
  session,
  hideMenu: false,
};
OpenWithActiveLink.story = {
  parameters: {
    nextRouter: {
      pathname: "/user/profile",
    },
  },
};
