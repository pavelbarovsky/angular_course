import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Notification {
  title: string;
  subtitle: string;
  type: 'success' | 'error';
  timeout: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private notificationSubject = new Subject<Notification>();

  getNoti(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }

  showNoti(notification: Notification) {
    this.notificationSubject.next(notification);
  }
}
