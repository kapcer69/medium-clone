import { BackendErrorsInterface } from '../../shared/interfaces/backendErrors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
