import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  dataLoaded = false;
  filterText = '';
  // userResponseModel: UserResponseModel = {
  //   data: this.users,
  //   message: '',
  //   success: true,
  // };

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.getUsersByCategory(params['userId']);
      } else {
        this.getUsers();
      }
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      this.dataLoaded = true;
    });
  }

  getUsersByCategory(userId: number) {
    this.userService.getUserByUserId(userId).subscribe((response) => {
      this.users = response;
      this.dataLoaded = true;
    });
  }
}
