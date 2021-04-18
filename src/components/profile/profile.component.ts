import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private Auth: AngularFireAuth ,private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout() {
    return this.Auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.authService.checkAuth();
    })
  }

}
