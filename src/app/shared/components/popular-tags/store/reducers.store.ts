import { createFeature, createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from '../interfaces/popularTagsState.interface';
import { popularTagsActions } from './actions.store';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  popularTags: null,
};

const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    on(popularTagsActions.getPopularTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(popularTagsActions.getPopularTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      popularTags: action.popularTags,
    })),
    on(popularTagsActions.getPopularTagsFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
  ),
});

export const {
  name: popularTagsFeatureKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectError,
  selectPopularTags,
} = popularTagsFeature;
