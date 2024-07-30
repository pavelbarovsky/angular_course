import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { UserCredentials, UserRegistration, LoginResponse, RegistrationResponse, UserResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://evo-academy.wckz.dev';
  private userSubject: BehaviorSubject<UserResponse> = new BehaviorSubject<UserResponse>({
    id: '',
    firstName: '',
    lastName: '',
    middleName: '',
    avatar: '',
    jwtToken: '',
    expiresIn: 0,
    role: 'guest',
    username: '',
  });

  constructor(private http: HttpClient) {}

  getUser(): Observable<UserResponse> {
    return this.userSubject.asObservable();
  }

  login(credentials: UserCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/cooking-blog/users/sign`, credentials).pipe(
      tap(response => {
        this.userSubject.next(response);
      })
    );
  }

  register(user: UserRegistration): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(`${this.apiUrl}/api/cooking-blog/users/registration`, user);
  }

  logout(): void {
    this.clearUser();
  }

  private clearUser(): void {
    this.userSubject.next({
      id: '',
      firstName: '',
      lastName: '',
      middleName: '',
      avatar: '',
      jwtToken: '',
      expiresIn: 0,
      role: 'guest',
      username: '',
    });
  }

  getToken(): string {
    return this.userSubject.value.jwtToken;
  }

  getRole(): Observable<string> {
    return this.userSubject.asObservable().pipe(map((user: UserResponse) => user.role));
  }

  getUsername(): Observable<string> {
    return this.userSubject.asObservable().pipe(map((user: UserResponse) => user.username));
  }

  getFirstName(): Observable<string> {
    return this.userSubject.asObservable().pipe(map((user: UserResponse) => user.firstName));
  }

  getLastName(): Observable<string> {
    return this.userSubject.asObservable().pipe(map((user: UserResponse) => user.lastName));
  }

  getAvatar(): Observable<string> {
    return this.userSubject.asObservable().pipe(map((user: UserResponse) => user.avatar));
  }
}
