import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import MobileLink from './MobileLink';

export default {
  component: MobileLink,
  title: "Navbar/MobileLink",
  decorators: [withNextRouter],
};

export const Default = () => {
  return <MobileLink path="/no-active" label="Groups" />;
};

Default.story = {
  parameters: {
    nextRouter: {
      pathname: "/active",
    },
  },
};

export const Active = () => {
  return <MobileLink path="/active" label="Profile" />;
};

Active.story = {
  parameters: {
    nextRouter: {
      pathname: "/active",
    },
  },
};
