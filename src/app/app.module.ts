import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

// Primeng
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';

import { CoronaTotalComponent } from './total/total.component';
import { CountryLiveComponent } from './country/country-live/country-live.component';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CountryComponent,
    CountryListComponent,
    CountryLiveComponent,
    CoronaTotalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
