import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
