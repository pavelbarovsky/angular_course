import { Component } from '@angular/core';
import { HttpservService } from './httpserv.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTTP app';

  constructor(private httpServ: HttpservService, private router: Router) {}

  onClickBtn1() {
    this.httpServ.funcBtn1().subscribe({
      next: (response) => console.log(response),
    });
  }

  onClickBtn2() {
    this.httpServ.funcBtn2().subscribe({
      next: (response) => console.log(response),
    });
  }

  onClickBtn3() {
    this.httpServ.funcBtn3().subscribe({
      next: (response) => console.log(response),
    });
  }

  onClickBtn4() {
    this.httpServ.funcBtn4().subscribe({
      next: (response) => {
        console.log(response);
        console.log('Запрос выполнен успешно');
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 404) {
          console.log('Ошибка 404: Запрошенный ресурс не найден');
        } else if (err.status === 500) {
          console.log('Ошибка 500: Внутренняя ошибка сервера');
        } else {
          console.log('Произошла какая-то ошибка:', err);
        }
      }
    });
  }

  onClickBtn5() {
    this.httpServ.funcBtn5().subscribe({
      next: (response) => console.log(response),
    });
  }

  onClickBtn6() {
    this.httpServ.funcBtn6().subscribe({
      next: (response) => console.log(response),
    });
  }

  getResolve() {
    this.httpServ.funcResolve().subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/second');
      }
    });
  }
}


