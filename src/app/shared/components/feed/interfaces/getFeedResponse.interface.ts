import { ArticleInterface } from '../../../interfaces/article.interface';

export interface GetFeedResponseInterface {
  article: ArticleInterface[];
  articlesCount: number;
}
