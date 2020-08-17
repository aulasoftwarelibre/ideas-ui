import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import MobileMenu from './MobileMenu';

export default {
  component: MobileMenu,
  title: "Navbar/MobileMenu",
  decorators: [withNextRouter],
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const WithoutActiveLink = () => {
  return <MobileMenu hideMenu={false} />;
};

WithoutActiveLink.parameters = {
  nextRouter: {
    pathname: "/user/profile",
  },
};

export const WithActiveLink = () => {
  return <MobileMenu hideMenu={false} />;
};
