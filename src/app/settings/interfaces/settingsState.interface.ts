import { BackendErrorsInterface } from '../../shared/interfaces/backendErrors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
