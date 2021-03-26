import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { SearchCountryComponent } from '../components/search-country/search-country.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { CardDetailsComponent } from '../components/card-details/card-details.component';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import {routes} from './routes';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { CardButtonComponent } from '../components/card-button/card-button.component'
import {LoadingComponent} from '../components/Loading/loading.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchCountryComponent,
    CardListComponent,
    CardDetailsComponent,
    PageNotFoundComponent,
    CardButtonComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
