import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Profile } from '../Models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public profile: Profile;
  public userAuth: string;

  usuario = JSON.parse(localStorage.getItem('token'))

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }
  userProfile() {

  }

}


