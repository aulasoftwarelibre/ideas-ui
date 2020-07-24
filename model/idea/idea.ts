import { User } from "../user/auth";

export interface Idea {
  title: string;
  group: string;
  category: string;
  image?: string;
  startsAt: Date;
  online: boolean;
  attendess: User[];
}
