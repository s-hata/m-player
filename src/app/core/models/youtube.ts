import { YoutubeMedia } from 'app/core/models/youtube-media';

export interface Youtube {
  kind: string;
  etag: string;
  pageInfo: Object;
  items: Array< YoutubeMedia >;
}

