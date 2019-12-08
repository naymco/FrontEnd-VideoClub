import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/component/Models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    username: '',
    password: '',
  }
  usuario = JSON.parse(localStorage.getItem('token'))
  res: object;
  constructor(private userService: UserService, private router: Router) { }
  login() {
    this.userService.login(this.user).subscribe(res => {
      this.res = res;
      this.userService.setUser(res['user'])
      localStorage.setItem('token', JSON.stringify(res))
      setTimeout(() => {
        this.router.navigate(['/auth'])
      }, 1000);
    },
      error => {
        this.userService.isRed = true;
        this.res = error.error
      })
  }

}
