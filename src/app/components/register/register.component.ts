import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserRegistration } from 'src/app/interfaces/auth.interface';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: UserRegistration = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: ' ',
  };

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private notifyService: NotifyService) {}

  onRegister() {
    if (!this.user.middleName) {
      this.user.middleName = '';
    }

    this.authService.register(this.user).subscribe(
      response => {
        console.log('Успешная регистрация:', response);
        this.notifyService.showNoti({
          title: 'Аккаунт зарегистрирован',
          subtitle: 'Можете войти в аккаунт',
          type: 'success',
          timeout: 5000,
        });
        this.router.navigateByUrl('/'); 
      },
      error => {
        console.error('Ошибка регистрации:', error);
      }
    );
  }

  disabledRegister() {
    this.notifyService.showNoti({
      title: 'Ошибка регистрации',
      subtitle: 'Проверьте введённые данные',
      type: 'error',
      timeout: 5000,
    });
  }
}
