import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  userUrl = 'assets/user.json';

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User>(this.userUrl);
  }
}
