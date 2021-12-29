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
import { ResultComponent } from './result/result.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApiConstructorComponent,
    RouteFormComponent,
    RouteFilterPipe,
    RouteComponent,
    ResultComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [RouteFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
