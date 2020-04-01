import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { routerReducers } from './router/router.reducer';
import { RouterEffects } from './router/router.effect';
import { RouterStateSerializerProvider } from './router/router.custom-serializer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    RouterStateSerializerProvider,
  ]
})
export class CoreStoreModule { }
