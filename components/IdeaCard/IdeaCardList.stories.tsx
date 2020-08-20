import React from 'react';

import IdeaCardList, { Props } from './IdeaCardList';
import { ideas } from './IdeaCardList.test';

export default {
  component: IdeaCardList,
  title: "IdeaCard/IdeaCardList",
  argTypes: {
    width: {
      control: {
        type: "range",
        min: 0,
        max: 8,
        step: 1,
      },
    },
  },
};

const Template = (args: Props) => <IdeaCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  ideas: ideas,
};

export const Empty = Template.bind({});
Empty.args = {
  ideas: [],
};
