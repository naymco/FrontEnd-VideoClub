import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Profile } from '../Models/profile.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public profile: Profile = {
    username: '',
    password: '',
    alquiler_peli: '',
    peliculaPedida: '',
    fecha_pedido: '',
    fecha_entrega: ''
  }

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  userProfile() {
    //this.userService.auth(this.profile)
    this.route.paramMap.subscribe(profile => {
      this.userService
    })
  }

}


