
import {CardListComponent} from '../components/card-list/card-list.component'
import {CardDetailsComponent} from '../components/card-details/card-details.component'
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component'
import {LoginComponent} from '../components/login/login.component'
import {ProfileComponent} from '../components/profile/profile.component'
import {SignupComponent} from '../components/signup/signup.component'
export let routes = [
  
  { path:'', component: CardListComponent},

  { path:'login', component: LoginComponent},

  { path:'signup', component: SignupComponent},

  { path:'profile', component: ProfileComponent},

  { path:'name/:name', component: CardDetailsComponent},

  { path:'**', component: PageNotFoundComponent}
]
    // { path:'', redirectTo: 'name/:name', pathMatch: 'full'},

   
