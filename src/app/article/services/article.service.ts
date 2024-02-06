import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}/articles/${slug}`);
  }
}
