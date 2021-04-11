import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import {AuthService} from '../services/auth.service'
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = true;
  @Output() enableDarkMode = new EventEmitter();

  constructor(private authService : AuthService,
     private Auth: AngularFireAuth) { }

  ngOnInit() {
  }

  changeTheme(){
    this.enableDarkMode.emit()
  }

  // logout() {
  //   return this.Auth.signOut().then(() => {
  //     localStorage.removeItem('user');
  //     this.authService.checkAuth();
  //     this.isAuth = !this.isAuth;
  //     console.log('isAuth LogOUT :>> ', this.isAuth);
  //   })
  // }


}