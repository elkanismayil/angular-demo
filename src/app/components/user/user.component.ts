import { UserService } from './../../services/user.service';
import { UserResponseModel } from './../../models/userResponseModel';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  dataLoaded = false;

  // userResponseModel: UserResponseModel = {
  //   data: this.users,
  //   message: '',
  //   success: true,
  // };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      this.dataLoaded = true;
    });
  }
}
