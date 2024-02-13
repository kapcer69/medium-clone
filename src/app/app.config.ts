import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import * as authEffects from './auth/store/effects.store';
import { authFeatureKey, authReducer } from './auth/store/reducers.store';
import { AddToFavoritesService } from './shared/components/add-to-favorites/services/add-to-favorites.service';
import * as addToFavoritesEffects from './shared/components/add-to-favorites/store/effects.store';
import * as feedEffects from './shared/components/feed/store/effects.store';
import {
  feedFeatureKey,
  feedReducer,
} from './shared/components/feed/store/reducers.store';
import * as getPopularTagsEffects from './shared/components/popular-tags/store/effects.store';
import {
  popularTagsFeatureKey,
  popularTagsReducer,
} from './shared/components/popular-tags/store/reducers.store';
import { authInterceptor } from './shared/interceptors/authInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore({
      router: routerReducer,
    }),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(popularTagsFeatureKey, popularTagsReducer),
    provideEffects(
      authEffects,
      feedEffects,
      getPopularTagsEffects,
      addToFavoritesEffects,
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideRouterStore(),
    AddToFavoritesService,
  ],
};
