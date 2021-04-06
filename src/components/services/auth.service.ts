import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Auth: AngularFireAuth,private router: Router ) { 
  }

  checkAuth() {
   return this.Auth.authState.subscribe(user => {
      if(user){
        this.router.navigate(['/profile'])
      } else{
        this.router.navigate(['/login'])
      }
    })
  }
}
