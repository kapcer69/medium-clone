import { UserProfileInterface } from '../../user-profile/interfaces/userProfile.interface';

export interface CommentInterface {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: UserProfileInterface;
}
