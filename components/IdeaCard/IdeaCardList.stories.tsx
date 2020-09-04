import { Story } from '@storybook/react/types-6-0';
import faker from 'faker';
import React from 'react';

import { Idea } from '../../model/idea/idea';
import IdeaCardList, { Props } from './IdeaCardList';

export const ideas: Idea[] = [...Array(8)].map(() => {
  const title = faker.lorem.sentence();
  return {
    id: faker.random.uuid(),
    slug: faker.helpers.slugify(title),
    title: title,
    group: faker.random.arrayElement(["Group A", "Group B", "Group C"]),
    category: faker.random.arrayElement([
      "Category A",
      "Category B",
      "Category C",
    ]),
    image: faker.image.technics(),
    startsAt: faker.date.future(),
    online: faker.random.boolean(),
    attendees: [],
  };
});

export default {
  component: IdeaCardList,
  title: "IdeaCard/IdeaCardList",
  includeStories: ["Default", "Empty"],
};

const Template: Story<Props> = (args) => <IdeaCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  ideas,
};

export const Empty = Template.bind({});
Empty.args = {
  ideas: [],
};
