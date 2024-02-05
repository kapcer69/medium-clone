import { ArticleInterface } from '../../shared/interfaces/article.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: string | null;
  article: ArticleInterface | null;
}
