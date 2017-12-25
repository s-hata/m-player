import { routerReducer } from '@ngrx/router-store';

import * as fromVideos from 'app/core/reducers/videos.reducer';


export interface State {
  videos: fromVideos.State;
}

export const reducers = {
  routerReducer: routerReducer,
  videosReducer: fromVideos.reducer
};
