// import {CardListComponent} from '../components/card-list/card-list.component'
import {CardDetailsComponent} from '../components/card-details/card-details.component'

export let routes = [
    // { path:'', component: CardListComponent  },

    { path:'name/:name', component: CardDetailsComponent}
    // { path:'', redirectTo: 'name/:name', pathMatch: 'full'},
    // { path:'**', component: pageNotFound}

   
]