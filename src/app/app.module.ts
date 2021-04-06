import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { SearchCountryComponent } from '../components/search-country/search-country.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { CardDetailsComponent } from '../components/card-details/card-details.component';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {routes} from './routes';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { CardButtonComponent } from '../components/card-button/card-button.component'
import {LoadingComponent} from '../components/Loading/loading.component';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SignupComponent } from '../components/signup/signup.component'



const firebaseConfig = {
 apiKey: "AIzaSyDU4S1MIqnEgDLiwQTZxTrr3KEIi7FUAb4",
 authDomain: "alaa-angular-project.firebaseapp.com",
 projectId: "alaa-angular-project",
 storageBucket: "alaa-angular-project.appspot.com",
 messagingSenderId: "617451568037",
 appId: "1:617451568037:web:20a1cfa6f6156d66d7464c",
 measurementId: "G-SG4NXRWF11"
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchCountryComponent,
    CardListComponent,
    CardDetailsComponent,
    PageNotFoundComponent,
    CardButtonComponent,
    LoadingComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
