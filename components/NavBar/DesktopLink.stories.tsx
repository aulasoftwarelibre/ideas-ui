import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import DesktopLink, { Props } from './DesktopLink';

export default {
  component: DesktopLink,
  title: "Navbar/DesktopLink",
  decorators: [withNextRouter],
};

const Template: Story<Props> = (args) => <DesktopLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Groups",
  path: "/no-active",
};

Default.parameters = {
  nextRouter: {
    pathname: "/active",
  },
};

export const Active = Template.bind({});
Active.args = {
  label: "Groups",
  path: "/active",
};

Active.parameters = {
  nextRouter: {
    pathname: "/active",
  },
};
