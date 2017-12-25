import { createSelector } from 'reselect';
import * as VideosActions from 'app/core/actions/videos.actions';

export interface State {
  error?: string;
  loaded: boolean;
  loading: boolean;
  videos?: any[];
}

const initialState: State = {
  loaded: false,
  loading: false
};

export function reducer(state: State = initialState, action: VideosActions.Actions): State {

  switch (action.type) {
    case VideosActions.Types.ADD:
      return Object.assign({}, state, {
        videos: action.payload
      });

    case VideosActions.Types.RESET:
      return Object.assign({}, state, {
        videos: []
      });

    default:
      return state;
  }
}
