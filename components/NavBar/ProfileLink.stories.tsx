import * as React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import ProfileLink from './ProfileLink';

export default {
  component: ProfileLink,
  title: "Navbar/ProfileLink",
  decorators: [withNextRouter],
};

export const Default = () => {
  return <ProfileLink path="/no-active" label="Profile" />;
};

Default.story = {
  parameters: {
    nextRouter: {
      pathname: "/active",
    },
  },
};

export const Active = () => {
  return <ProfileLink path="/active" label="Profile" />;
};

Active.story = {
  parameters: {
    nextRouter: {
      pathname: "/active",
    },
  },
};
