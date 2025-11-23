import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  isLoggedIn = false;
  username = '';
  myFirstName = 'jalel';

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    this.username = '';
  }

  login() {
    if (this.username.toLowerCase() === this.myFirstName.toLowerCase()) {
      this.isLoggedIn = true;
    }
  }
}
