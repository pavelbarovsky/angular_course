import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservService {

  constructor(private http: HttpClient) { }

  funcBtn1() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  funcBtn2() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', {params: {'postId': '1'}})
  }

  funcBtn3() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
  }

  funcBtn4() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  funcBtn5() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {  headers: { 'X-Test': '1' }, responseType: 'text' });
  }

  funcBtn6() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }

  funcResolve() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1', {responseType: 'text'});
  }
}
