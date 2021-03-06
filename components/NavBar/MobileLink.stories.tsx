import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import MobileLink, { Props } from './MobileLink';

export default {
  component: MobileLink,
  title: 'Navbar/MobileLink',
  decorators: [withNextRouter],
};

const Template: Story<Props> = (args) => <MobileLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: '/no-active',
  label: 'Groups',
};
Default.parameters = {
  nextRouter: {
    pathname: '/active',
  },
};

export const Active = Template.bind({});
Active.args = {
  path: '/active',
  label: 'Groups',
};
Active.parameters = {
  nextRouter: {
    pathname: '/active',
  },
};
