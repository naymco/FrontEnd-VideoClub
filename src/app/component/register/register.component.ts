import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Register } from 'src/app/component/Models/register.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterViewInit {
  // @ViewChild('username', { read: ElementRef, static: false })
  name;
  username;
  email;
  password;
  user: Register = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngAfterViewInit() {
    console.log('After View Init ')
    // setTimeout(() => {
    //   console.log(this.username)
    //   this.username.nativeElement.focus()
    // }, 0);
  }
  registrar(form: any) {
    this.userService.register(this.user)
      .subscribe(res => console.log(res))

    setTimeout(() => {
      this.router.navigate(['/auth/login'])
    }, 500);
  }

}
