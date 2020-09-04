import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import MobileMenu, { Props } from './MobileMenu';

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

const Template: Story<Props> = (args) => <MobileMenu {...args} />;

export const WithoutActiveLink = Template.bind({});
WithoutActiveLink.args = {
  hideMenu: false,
};
WithoutActiveLink.parameters = {
  nextRouter: {
    pathname: "/user/profile",
  },
};

export const WithActiveLink = Template.bind({});
WithActiveLink.args = {
  hideMenu: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  hideMenu: true,
};
