import { BackendErrorsInterface } from '../../shared/interfaces/backendErrors.interface';
import { CurrentUserInterface } from '../../shared/interfaces/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
