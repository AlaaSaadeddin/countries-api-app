import { Component, OnInit, Provider } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import firebase from 'firebase';
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

   LoginGoogle(){
      return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(()=> {
      this.authService.checkAuth();
    })
   }

  //  loginFb() {
  //   return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res)=> {
  //      console.log('res :>> ', res);
  //      var user = res.user;
  //     this.authService.checkAuth()
      
  //   }).catch(err => console.log('err :>> ', err))
    
  // }

}

