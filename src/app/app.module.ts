import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { FlexibleSidebarLayoutModule } from './flexible-sidebar-layout/flexible-sidebar-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FlexibleSidebarLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
