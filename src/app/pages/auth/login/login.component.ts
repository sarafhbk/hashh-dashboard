import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as Parse from 'parse';
import { Router } from '@angular/router';
import { AuthServiceLocal } from '../../../auth.service' ;
import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  name: string;
  password : string;
  success = false;
  danger = false;
  errorMsg : any;
  constructor(public router: Router, public auth: AuthServiceLocal, private authService: AuthService ) {
    // Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    // Parse.serverURL = environment.serverURL;
   }
   ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.auth.userData(user);
      this.loggedIn = (user != null);
    });
  }

 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.success = true;
      this.router.navigateByUrl('/pages/iot-dashboard');
      localStorage.setItem('isLoggedIn', this.user.firstName);
      localStorage.setItem('currentUserPic', this.user.photoUrl);
      localStorage.setItem('currentUserName', this.user.name);
      localStorage.setItem('currentUserEmail', this.user.email);
    }).catch((error) => {
this.danger = true;
this.errorMsg = error;
    });
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }

   handleSubmit = () => {
     console.log('called');
    Parse.User.logIn(this.name, this.password).then((user) => {
      localStorage.setItem('isLoggedIn', user);
this.router.navigateByUrl('/pages/iot-dashboard');
    }).catch((error) => {
console.log(error);
    });
  }

  handleUserNameChange = (event: KeyboardEvent) => {
    this.name = (<HTMLInputElement>event.target).value;
}
  handlePasswordChange = (event: KeyboardEvent) => {
      this.password = (<HTMLInputElement>event.target).value;
  }

}
