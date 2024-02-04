import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { FeedComponent } from '../../shared/components/feed/feed.component';
import { PopularTagsComponent } from '../../shared/components/popular-tags/popular-tags.component';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent, PopularTagsComponent],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
