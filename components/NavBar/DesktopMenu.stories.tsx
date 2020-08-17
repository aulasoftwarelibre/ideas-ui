import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import DesktopMenu from './DesktopMenu';

export default {
  component: DesktopMenu,
  title: "Navbar/DesktopMenu",
  decorators: [withNextRouter],
};

export const WithActiveLink = () => {
  return <DesktopMenu />;
};

export const WithoutActiveLink = () => {
  return <DesktopMenu />;
};

WithoutActiveLink.parameters = {
  nextRouter: {
    pathname: "/no-active",
  },
};
