import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ArticleInterface } from '../interfaces/article.interface';
import { ArticleResponseInterface } from '../interfaces/articleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    return this.http
      .get<ArticleResponseInterface>(`${environment.apiUrl}/articles/${slug}`)
      .pipe(map((res) => res.article));
  }
}
