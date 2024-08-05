import { Component, OnInit } from '@angular/core';
import { NotifyService, Notification } from 'src/app/services/notify.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notis: Notification[] = [];

  constructor(private notifyService: NotifyService) {}

  ngOnInit() {
    this.notifyService.getNoti().subscribe(n => {
      this.notis.push(n);
      setTimeout(() => this.removeNoti(n), n.timeout);
    });
  }

  closeNoti(n: Notification) {
    this.removeNoti(n);
  }

  private removeNoti(n: Notification) {
    const index = this.notis.indexOf(n);
    if (index !== -1) {
      this.notis.splice(index, 1);
    }
  }
}
