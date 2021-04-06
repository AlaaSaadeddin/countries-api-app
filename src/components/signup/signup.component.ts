import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

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

}
