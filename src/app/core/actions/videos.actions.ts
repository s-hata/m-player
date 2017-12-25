import { Action } from '@ngrx/store';


export const Types = {
  ADD: '[videos] Add',
  RESET: '[videos] Reset'
};

export class AddVideo implements Action {
  readonly type = Types.ADD;
  constructor(public payload: { videos: any[] }) { }
}

export class Reset implements Action {
  readonly type = Types.RESET;
  constructor(public payload?: any) { }
}

export type Actions
  = AddVideo
  | Reset
