import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { UserCredentials, UserRegistration, LoginResponse, RegistrationResponse, UserResponse } from '../interfaces/auth.interface';
import { NotifyService } from './notify.service';

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

  // дублировал методы, чтобы сделать с localstorage
  // потом может от него можно избавиться

  constructor(private http: HttpClient, private notifyService: NotifyService) {}

  // getUser(): Observable<UserResponse> {
  //   return this.userSubject.asObservable();
  // }

  // login(credentials: UserCredentials): Observable<LoginResponse> {
  //   return this.http.post<LoginResponse>(`${this.apiUrl}/api/cooking-blog/users/sign`, credentials).pipe(
  //     tap(response => {
  //       this.userSubject.next(response);
  //     })
  //   );
  // }

  // logout(): void {
  //   this.clearUser();
  // }

  getUser(): Observable<UserResponse> {
    const userFromStorage = this.getUserFromStorage();
    if (userFromStorage) {
      this.userSubject.next(userFromStorage);
    }
    return this.userSubject.asObservable();
  }

  login(credentials: UserCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/cooking-blog/users/sign`, credentials).pipe(
      tap((response) => {
        this.userSubject.next(response);
        this.saveUserToStorage(response);
      })
    );
  }

  register(user: UserRegistration): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(`${this.apiUrl}/api/cooking-blog/users/registration`, user);
  }

  logout(): void {
    this.clearUser();
    this.clearUserFromStorage();
  }

  clearUser(): void {
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

  private readonly USER_STORAGE_KEY = 'user';

  private saveUserToStorage(user: UserResponse): void {
    localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(user));
  }

  private getUserFromStorage(): UserResponse {
    const userJson = localStorage.getItem(this.USER_STORAGE_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  private clearUserFromStorage(): void {
    localStorage.removeItem(this.USER_STORAGE_KEY);
  }
}
