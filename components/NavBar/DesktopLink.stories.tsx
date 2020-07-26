import * as React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import DesktopLink from './DesktopLink';

export default {
  component: DesktopLink,
  title: "Navbar/DesktopLink",
  decorators: [withNextRouter],
};

export const Default = () => {
  return <DesktopLink path="/no-active" label="Groups" />;
};

Default.story = {
  parameters: {
    nextRouter: {
      pathname: "/active",
    },
  },
};

export const Active = () => {
  return <DesktopLink path="/active" label="Groups" />;
};

Active.story = {
  parameters: {
    nextRouter: {
      pathname: "/active",
    },
  },
};