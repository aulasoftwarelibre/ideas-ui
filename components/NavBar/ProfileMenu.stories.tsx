import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import { Session } from '../../model/user/auth';
import ProfileMenu from './ProfileMenu';

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

export const ClosedWithUserAvatar = () => {
  return (
    <div className="mx-auto flex float-right">
      <ProfileMenu
        session={session}
        hideMenu={true}
        onClick={action("clicked")}
      />
    </div>
  );
};

export const ClosedWithDefaultAvatar = () => {
  return (
    <div className="mx-auto flex float-right">
      <ProfileMenu
        session={{ user: {} }}
        hideMenu={true}
        onClick={action("clicked")}
      />
    </div>
  );
};

export const OpenWithUserAvatar = () => {
  return (
    <div className="mx-auto flex float-right">
      <ProfileMenu
        session={session}
        hideMenu={false}
        onClick={action("clicked")}
      />
    </div>
  );
};

export const OpenWithDefaultAvatar = () => {
  return (
    <div className="mx-auto flex float-right">
      <ProfileMenu
        session={{ user: {} }}
        hideMenu={false}
        onClick={action("clicked")}
      />
    </div>
  );
};

export const OpenWithActiveLink = () => {
  return (
    <div className="mx-auto flex float-right">
      <ProfileMenu
        session={session}
        hideMenu={false}
        onClick={action("clicked")}
      />
    </div>
  );
};

OpenWithActiveLink.story = {
  parameters: {
    nextRouter: {
      pathname: "/user/profile",
    },
  },
};
