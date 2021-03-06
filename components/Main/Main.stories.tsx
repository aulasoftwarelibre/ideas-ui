import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Main from './Main';

export default {
  component: Main,
  title: 'Components/Main',
  argsTypes: {
    children: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Componente que contiene la información de la página centrada y con márgenes.',
      },
    },
  },
};

const Template: Story = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Hello world' };
