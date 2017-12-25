import { ActionReducer } from '@ngrx/store';
import { MetaReducer } from '@ngrx/store';

export function storeDebug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);
    console.group(action.type);
    console.log('%c prev state', 'color:#9E9E9E; font-weight: bold', state);
    console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
    console.log('%c next state', 'color: #4CaF50; font-weight: bold', nextState);
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [ storeDebug ];
