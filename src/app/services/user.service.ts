// import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    let newPath = this.apiUrl + 'albums';
    return this.httpClient.get<User[]>(newPath);
  }

  getUserByUserId(userId: number): Observable<User[]> {
    let newPath = this.apiUrl + 'users/category/?userId=' + userId;
    return this.httpClient.get<User[]>(newPath);
  }
}
