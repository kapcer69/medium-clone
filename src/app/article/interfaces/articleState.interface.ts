import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { GetCommentsResponseInterface } from './getCommentsResponse.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: string | null;
  article: ArticleInterface | null;
  comments: GetCommentsResponseInterface | null;
}
