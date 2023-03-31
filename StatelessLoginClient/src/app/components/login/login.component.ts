import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  mensagem = "";
  constructor(
    private router: Router,
    private authenticationService: LoginService
  ) { }

  singin(username: string, password: string) {
    this.authenticationService.login(username, password)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          console.log(response);
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
          this.mensagem = error.error;
        }
      );
  }
}
