import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  public role: 'user' | 'admin' = 'user';

  setRole(role: 'user' | 'admin') {
    this.role = role;
  }

  getRole() {
    return this.role;
  }

  getInfo() {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getInfoById(id: number) {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }
}
