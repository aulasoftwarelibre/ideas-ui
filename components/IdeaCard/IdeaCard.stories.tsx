import faker from 'faker';
import React from 'react';
import * as uuid from 'uuid';

import { Idea } from '../../model/idea/idea';
import IdeaCard, { Props } from './IdeaCard';

export default {
  title: "IdeaCard/IdeaCard",
  component: IdeaCard,
};

const todayDate = Date.now();

const idea: Idea = {
  id: uuid.v4(),
  slug: "idea-title",
  title: "Idea title",
  group: "Organization",
  category: "Category",
  startsAt: new Date(todayDate),
  online: true,
  attendees: [{}, {}, {}, {}, {}],
  image: faker.image.technics(),
};

const Template = (args: Props) => <IdeaCard {...args} />;

export const Default = Template.bind({});
Default.args = { idea: { ...idea, image: null } };

export const Online = Template.bind({});
Online.args = { idea: idea };

export const Presencial = Template.bind({});
Presencial.args = { idea: { ...idea, online: false } };
