import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import DesktopMenu from './DesktopMenu';

export default {
  component: DesktopMenu,
  title: 'Navbar/DesktopMenu',
  decorators: [withNextRouter],
};

const Template: Story = () => <DesktopMenu />;

export const WithActiveLink = Template.bind({});

export const WithoutActiveLink = Template.bind({});
WithoutActiveLink.parameters = {
  nextRouter: {
    pathname: '/no-active',
  },
};
