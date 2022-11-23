import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { GraphListComponent } from './graph-list/graph-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleGraphComponent } from './single-graph/single-graph.component';

@NgModule({
  declarations: [AppComponent, GraphComponent, GraphListComponent, HeaderComponent, LandingPageComponent, SingleGraphComponent],
  imports: [BrowserModule,AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
