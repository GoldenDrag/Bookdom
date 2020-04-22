import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public userModel = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }
  onLogin(): void {
    console.log(this.userModel)
    this.userService.Login(this.userModel)
  }  


}
