import { User } from '../user/auth';

export interface Idea {
  id: string;
  slug: string;
  title: string;
  group: string;
  category: string;
  image?: string;
  startsAt: Date;
  online: boolean;
  attendees: User[];
}
