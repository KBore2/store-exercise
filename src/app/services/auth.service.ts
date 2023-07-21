import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private url = 'https://fakestoreapi.com/auth';

  login(username: string, password: string): Observable<string> {
    return this.http
      .post<string>(`${this.url}/login`, {
        username: username,
        password: password,
      })
      .pipe(map((token: any) => token.token.toString()));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  constructor() {}
}
