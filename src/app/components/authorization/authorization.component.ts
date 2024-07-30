import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserCredentials } from 'src/app/interfaces/auth.interface';


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

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      response => {
        console.log('Успешный логин:', response);
        this.EnterLink();
      },
      error => {
        console.error('Ошибка логина:', error);
      }
    );
  }

  EnterLink() {
    this.router.navigateByUrl('/')
  }
}