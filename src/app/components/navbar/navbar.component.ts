import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  role: string = 'guest';
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  avatar: string = '';

  constructor(public authService: AuthService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      this.role = user.role;
    });

    this.authService.getRole().subscribe(role => this.role = role);
    this.authService.getUsername().subscribe(username => this.username = username);
    this.authService.getFirstName().subscribe(firstName => this.firstName = firstName);
    this.authService.getLastName().subscribe(lastName => this.lastName = lastName);
    this.authService.getAvatar().subscribe(avatar => this.avatar = avatar);
  }
}