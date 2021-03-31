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
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  // userResponseModel: UserResponseModel = {
  //   data: this.users,
  //   message: '',
  //   success: true,
  // };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.httpClient
      .get<User[]>(this.apiUrl)
      .subscribe((response) => {
        this.users = response;
      });
  }
}
