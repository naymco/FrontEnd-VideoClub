import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../component/Models/user.model';
import { Register } from '../component/Models/register.model';
import { Profile } from '../component/Models/profile.model';

import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = JSON.parse(localStorage.getItem('user'));

  constructor(private httpClient: HttpClient) { }
  isRed = false;
  register(userRegister: Register): Observable<object> {
    return this.httpClient.post('http://localhost:3000/user/register', userRegister)
  }
  login(user: User): Observable<object> {
    return this.httpClient.post('http://localhost:3000/auth/login', user)
  }
  auth(profile: Profile): Observable<object> {
    return this.httpClient.get('http://localhost:3000/auth')
  }

  getUser(): User {
    return this.user;
  }
  setUser(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user))
  }
}
