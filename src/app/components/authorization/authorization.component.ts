import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserCredentials } from 'src/app/interfaces/auth.interface';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  credentials: UserCredentials = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService, 
    private router: Router,
    private notifyService: NotifyService,
  ) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      response => {
        console.log('Успешный логин:', response);
        this.notifyService.showNoti({
          title: `Вход в аккаунт ${response.username}`,
          subtitle: `Добро пожаловать ${response.firstName} ${response.lastName}`,
          type: 'success',
          timeout: 5000,
        });
        this.EnterLink();
      },
      error => {
        console.error('Ошибка логина:', error);
        this.notifyService.showNoti({
          title: 'Не удалось войти в аккаунт',
          subtitle: 'Неверный логин или пароль',
          type: 'error',
          timeout: 5000,
        });
      }
    );
  }

  EnterLink() {
    this.router.navigateByUrl('/')
  }
}