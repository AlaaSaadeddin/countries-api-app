
import {CardListComponent} from '../components/card-list/card-list.component'
import {CardDetailsComponent} from '../components/card-details/card-details.component'
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component'

export let routes = [
  
  { path:'country', component: CardListComponent},

      { path:'name/:name', component: CardDetailsComponent},

    { path:'**', component: PageNotFoundComponent}
]
























    // { path:'', redirectTo: 'name/:name', pathMatch: 'full'},

   
