import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire';
// import { auth } from 'firebase/app';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string ='';
  password : string = '';
  isAuth : boolean = false;

  constructor(private Auth: AngularFireAuth , private router: Router , private authService: AuthService) {
   }

   ngOnInit() {}

   login() {
    return this.Auth
    .signInWithEmailAndPassword(this.email,this.password).then(() => {
      console.log('object11111111111 :>> ',);
        this.authService.checkAuth();
        console.log('object2222222 :>> ',);
        this.isAuth = !this.isAuth
        console.log('isAuth Login :>> ', this.isAuth);      
    })
   }

}


  //  loginFb() {
  //    return this.Auth
  //  }

  //  loginGoogle() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // AuthLogin(provider) {
  //   return this.Auth.auth.signInWithPopup(provider)
  //   .then((result) => {
  //       console.log('You have been successfully logged in!')
  //   }).catch((error) => {
  //       console.log(error)
  //   })
  // }
