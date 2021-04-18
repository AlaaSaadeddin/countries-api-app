import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'
import firebase from 'firebase';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email : string ='';
  password : string = '';
  isAuth : boolean = false;

  constructor(private Auth: AngularFireAuth , private router: Router , private authService: AuthService) {
   }

  ngOnInit() {
  }

  signUp() {
    this.Auth.createUserWithEmailAndPassword(this.email,this.password).then(() => {
      this.authService.checkAuth();
    })
  }

  signupGoogle(){
      return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res)=> {
      console.log('res :>> ', res);
      this.authService.checkAuth();
    })
}

signUpFb() {
  return firebase.auth()
  .signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res)=> {
  this.authService.checkAuth()
  }).catch(err => console.log('err :>> ', err))
  
}
}
