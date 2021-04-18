import { Component, OnInit, Provider } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
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

  constructor(private Auth: AngularFireAuth , private router: Router , private authService: AuthService) {
   }

   ngOnInit() {}

   login() {
    return this.Auth
    .signInWithEmailAndPassword(this.email,this.password).then(() => {
        this.authService.checkAuth();
    })
   }

   LoginGoogle(){
      return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(()=> {
      this.authService.checkAuth();
    })
   }

   loginFb() {
    return firebase.auth()
    .signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res)=> {
    this.authService.checkAuth()
    }).catch(err => console.log('err :>> ', err))
    
  }

}

