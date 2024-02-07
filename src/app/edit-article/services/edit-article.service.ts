import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { ArticleRequestInterface } from '../../shared/interfaces/articleRequest';
import { ArticleResponseInterface } from '../../shared/interfaces/articleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class EditArticleService {
  constructor(private readonly http: HttpClient) {}

  editArticle(
    slug: string,
    articleRequest: ArticleRequestInterface,
  ): Observable<ArticleInterface> {
    return this.http
      .put<ArticleResponseInterface>(
        `${environment.apiUrl}/articles/${slug}`,
        articleRequest,
      )
      .pipe(map((res) => res.article));
  }
}
