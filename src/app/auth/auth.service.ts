import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token!: string;
  private _user: User | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('token')!;
  }

  public get token(): string {
    return this._token;
  }

  private set token(v: string) {
    this._token = v;
  }

  public get user(): User | null {
    return this._user;
  }

  public set user(v: User | null) {
    this._user = v;
  }

  setUserAndToken = (user: User) => {
    this.user = user;
    this.token = user.token!;
    localStorage.setItem('token', user.token!);
  };

  register(user: User): Observable<User> {
    return this.http
      .post<User>(`api/user/register`, user)
      .pipe(tap(this.setUserAndToken));
  }

  login(credentials: User): Observable<User> {
    return this.http
      .post<User>(`api/user/login`, credentials)
      .pipe(tap(this.setUserAndToken));
  }

  logout(): void {
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
