import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPageComponent } from './list-page/list-page.component';
import { ListCardComponent } from './list-page/list-card/list-card.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ListPageComponent, ListCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
