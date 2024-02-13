import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ArticleInterface } from '../../../interfaces/article.interface';
import { ArticleResponseInterface } from '../../../interfaces/articleResponse.interface';

@Injectable()
export class AddToFavoritesService {
  constructor(private readonly http: HttpClient) {}

  addToFavorites(slug: string): Observable<ArticleInterface> {
    return this.http
      .post<ArticleResponseInterface>(this.getUrl(slug), {})
      .pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    return this.http
      .delete<ArticleResponseInterface>(this.getUrl(slug))
      .pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: ArticleResponseInterface): ArticleInterface {
    return response.article;
  }
}
