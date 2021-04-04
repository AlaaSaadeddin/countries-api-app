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
  // checkAuth: boolean = false;

  constructor(private Auth: AngularFireAuth , private router: Router , authService: AuthService) {
   }

   ngOnInit() {
    this.Auth.authState.subscribe(user => {
      if(user){
        this.router.navigate(['/profile'])
      } else{
        this.router.navigate(['/login'])
      }
    })
  }

   login() {
     
    return this.Auth.signInWithEmailAndPassword(this.email,this.password).then(res => {
      console.log('res :>> ', res);
      if(res.user){
        this.isAuth = !this.isAuth
      }
      // console.log(this.email,this.password);
      
    })
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

}
