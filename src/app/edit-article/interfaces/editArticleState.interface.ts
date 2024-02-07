import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { BackendErrorsInterface } from '../../shared/interfaces/backendErrors.interface';

export interface EditArticleStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
  article: ArticleInterface | null;
}
