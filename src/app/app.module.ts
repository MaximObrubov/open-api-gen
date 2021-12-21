import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ApiConstructorComponent } from './api-constructor/api-constructor.component';
import { RouteFormComponent } from './route-form/route-form.component';

import { RouteFilterPipe } from '../app/api-constructor/routeFilterPipe';
import { RouteComponent } from './route/route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApiConstructorComponent,
    RouteFormComponent,
    RouteFilterPipe,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
