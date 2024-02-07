import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, filter, map } from 'rxjs';
import { ArticleFormComponent } from '../../shared/components/article-form/article-form.component';
import { ArticleFormValuesInterface } from '../../shared/components/article-form/interfaces/articleFormValues.interface';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { ArticleRequestInterface } from '../../shared/interfaces/articleRequest';
import { editArticleActions } from '../store/actions.store';
import {
  selectArticle,
  selectIsLoading,
  selectIsSubmitting,
  selectValidationErrors,
} from '../store/reducers.store';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  standalone: true,
  imports: [CommonModule, ArticleFormComponent, LoadingComponent],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleFormValuesInterface> = this.store.pipe(
    select(selectArticle),
    filter((article): article is ArticleInterface => article !== null),
    map((article: ArticleInterface) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      };
    }),
  );
  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    isLoading: this.store.select(selectIsLoading),
    backendErrors: this.store.select(selectValidationErrors),
    initialValues: this.initialValues$,
  });

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(editArticleActions.getArticle({ slug: this.slug }));
  }

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };
    this.store.dispatch(
      editArticleActions.editArticle({ request: request, slug: this.slug }),
    );
  }
}
