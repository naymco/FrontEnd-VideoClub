import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../component/Models/user.model';
import { LoginComponent } from '../component/login/login.component'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = JSON.parse(localStorage.getItem('user'));
  constructor(private httpClient: HttpClient) { }
  isRed = false;
  register(user: User): Observable<object> {
    return this.httpClient.post('http://localhost:3000/auth/register', user)
  }
  login(user: User): Observable<object> {
    return this.httpClient.post('http://localhost:3000/auth/login', user)
  }

  getUser(): User {
    return this.user;
  }
  setUser(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user))
  }
}
