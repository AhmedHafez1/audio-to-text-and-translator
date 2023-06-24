import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token!: string;
  private _user!: User;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')!;
  }

  public get token(): string {
    return this._token;
  }

  private set token(v: string) {
    this._token = v;
  }

  public get user(): User {
    return this._user;
  }

  public set user(v: User) {
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
}
