import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlexibleSidebarLayoutComponent } from './flexible-sidebar-layout/flexible-sidebar-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexibleSidebarLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
