import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { SettingsComponent } from './components/settings.component';
import { settingsFeatureKey, settingsReducer } from './store/reducers.store';

export const routes: Route[] = [
  {
    path: '',
    component: SettingsComponent,
    providers: [provideState(settingsFeatureKey, settingsReducer)],
  },
];
