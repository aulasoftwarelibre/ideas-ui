import faker, { fake } from 'faker';
import React from 'react';

import { Idea } from '../../model/idea/idea';
import IdeaCardList, { Props } from './IdeaCardList';

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

const Template = (args: Props) => <IdeaCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  ideas: ideas,
};

export const Empty = Template.bind({});
Empty.args = {
  ideas: [],
};