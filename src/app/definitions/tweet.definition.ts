import { User } from './user.definition';

export class Tweet {
  id: number;
  createdAt: Date;
  text: string;
  user: User;
}
