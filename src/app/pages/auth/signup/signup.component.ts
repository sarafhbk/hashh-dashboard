import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as Parse from 'parse';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
    name = '';
  email = '';
  password = '';
  rememberMe = false;
  constructor(public router: Router) {
    Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    Parse.serverURL = environment.serverURL;
   }
   handleSubmit = () => {
    const user = new Parse.User();
    user.set("username", this.name);
    user.set("email", this.email);
    user.set("password", this.password);
    user.set("rememberMe", this.rememberMe);

    user.signUp(null).then(
        (user) => {
            this.router.navigateByUrl('/login');
        }).catch((error)=> {
            alert("Error " + error.code + ": " + error.message);
        });
  }

  handleEmailChange = (event: KeyboardEvent) => {
    this.email = (<HTMLInputElement>event.target).value;
}
  handleUsernameChange = (event: KeyboardEvent) => {
      this.name = (<HTMLInputElement>event.target).value;
  }

  handlePasswordChange = (event: KeyboardEvent) => {
      this.password = (<HTMLInputElement>event.target).value;
  }

  handleRememberMeClick = () => {
      this.rememberMe = !this.rememberMe;
  }
}
