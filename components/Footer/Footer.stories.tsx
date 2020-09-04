import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { menuLinks } from '../../config/links';
import Footer, { Props } from './Footer';

export default {
  title: "Footer/Footer",
  component: Footer,
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;
export const Default = Template.bind({});
Default.args = {
  links: menuLinks,
};
