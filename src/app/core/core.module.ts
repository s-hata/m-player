// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ngrx modules
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
// app
import { reducers } from 'app/core/reducers/app.reducer';
import { metaReducers } from 'app/core/utils/state.logger';

@NgModule({
  imports: [
    CommonModule,
    // ngrx modules
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule
  ],
  declarations: [],
  exports: [
    StoreRouterConnectingModule
  ]
})
export class CoreModule { }
