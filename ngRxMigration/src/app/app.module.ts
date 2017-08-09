import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { mainStoreReducer } from './state-management/reducers/main-reducer';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { MainStoreEffects } from "./state-management/effects/main-store-effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({mainStoreReducer}),
    EffectsModule.run(MainStoreEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
