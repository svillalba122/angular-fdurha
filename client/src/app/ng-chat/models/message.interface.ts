import { User } from './user.interface';

export interface Message {
  type: 'NEW_MESSAGE' | 'CONNECT' | 'DISCONNECT';
  user: User;
  message?: string;
  date?: Date;
}
