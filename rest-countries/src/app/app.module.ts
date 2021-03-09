import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchCountryComponent } from './search-country/search-country.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchCountryComponent,
    CardListComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
