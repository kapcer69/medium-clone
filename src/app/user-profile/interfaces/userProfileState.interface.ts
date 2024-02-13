import { UserProfileInterface } from './userProfile.interface';

export interface UserProfileStateInterface {
  isLoading: boolean;
  error: string | null;
  userProfile: UserProfileInterface | null;
}
