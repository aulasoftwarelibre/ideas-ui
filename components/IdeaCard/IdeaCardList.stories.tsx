import React from 'react';

import { ideas } from './__fixtures__/ideas';
import IdeaCardList, { Props } from './IdeaCardList';

export default {
  component: IdeaCardList,
  title: "IdeaCard/IdeaCardList",
};

const Template = (args: Props) => <IdeaCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  ideas,
};

export const Empty = Template.bind({});
Empty.args = {
  ideas: [],
};
