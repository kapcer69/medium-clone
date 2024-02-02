import { ArticleInterface } from '../../../interfaces/article.interface';

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
