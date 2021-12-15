import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ApiConstructorComponent } from './api-constructor/api-constructor.component';
import { RouteFormComponent } from './route-form/route-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApiConstructorComponent,
    RouteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
