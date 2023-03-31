import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mensagem!: string;

  constructor(homeService: HomeService, private router: Router) {
    homeService.getData(localStorage.getItem('token') ?? '').subscribe(
      response => {
        this.mensagem = response.mensagem;
      },
      error => {
        console.log(error);
        alert(error.error);
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, (1000));
      }
    );;
  }
}
