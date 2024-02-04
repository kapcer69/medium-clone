import { PopularTagType } from '../../../interfaces/popular-tag.type';

export interface PopularTagsStateInterface {
  isLoading: boolean;
  error: string | null;
  popularTags: PopularTagType[] | null;
}
