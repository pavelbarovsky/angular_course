import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authServ: AuthService) {}
  
  changeRole(role: 'admin' | 'user') {
    this.authServ.setRole(role);
  }
}
