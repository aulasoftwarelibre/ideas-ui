import { Story } from '@storybook/react/types-6-0';
import faker from 'faker';
import React from 'react';

import { User } from '../../model/user/auth';
import IdeaAvatarList, { Props } from './IdeaAvatarList';

export default {
  title: 'IdeaCard/IdeaAvatarList',
  component: IdeaAvatarList,
};

const avatarAttendees: User[] = [
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
  { image: faker.image.avatar() },
];
const emptyAvatarAttendees: User[] = [{}, {}, {}, {}];

const Template: Story<Props> = (args) => <IdeaAvatarList {...args} />;

export const AvatarAttendees = Template.bind({});
AvatarAttendees.args = { attendees: avatarAttendees };

export const NoAvatarAttendees = Template.bind({});
NoAvatarAttendees.args = { attendees: emptyAvatarAttendees };

export const Empty = Template.bind({});
Empty.args = { attendees: [] };
