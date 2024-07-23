import { Component, OnInit } from '@angular/core';
import { AuthService, Post } from '../auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: Post[] = [];

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    this.authServ.getInfo().subscribe((data: Post[]) => {
      this.users = data.slice(0, 5); // Отображаем только первые 5 пользователей
    });
  }
}
