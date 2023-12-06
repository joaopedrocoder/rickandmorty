import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './shared/components/head/head.component';
import { CharactersViewComponent } from './modules/characters/pages/characters-view/characters-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './shared/components/card/card.component';
import { LabelComponent } from './shared/components/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    CharactersViewComponent,
    CardComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
