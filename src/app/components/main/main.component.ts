import { Component} from '@angular/core';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  email_text!: string;

  constructor(private notifyService: NotifyService) {}

  onSubscribe() {
    if (this.email_text) {
      this.notifyService.showNoti({
        title: 'Успех!',
        subtitle: 'Вы успешно подписались на рассылку.',
        type: 'success',
        timeout: 3000
      });
      this.email_text = ''; // Очистка поля ввода
    } else {
      this.notifyService.showNoti({
        title: 'Ошибка!',
        subtitle: 'Пожалуйста, введите свой email.',
        type: 'error',
        timeout: 3000
      });
    }
  }
}
