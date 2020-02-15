import { Injectable } from '@angular/core';
import {UserProfileService} from '../../core/services/user-profile.service';
import {UserServiceModel} from '../models/user-service.model';
import {Observable, of, throwError} from 'rxjs';
import {SettingsModel} from '../../core/models/settings.model';
import {serverUsers} from '../mocks/users.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private profileService: UserProfileService
  ) {
  }

  isLogin(): boolean {
    return this.profileService.isLogin();
  }

  login(user: Partial<UserServiceModel>): Observable<SettingsModel> {
    const users: UserServiceModel[] = [...serverUsers];
    const currUser = users.find((i) => i.login === user.login);

    if (!currUser) {
      return throwError({login: `There is no such user as ${user.login}`});
    }

    if (currUser.password !== user.password) {
      return throwError({password: `Password is wrong.`});
    }

    this.profileService.changeUser(currUser);

    return of(currUser);
  }

  logout(): void {
    this.profileService.changeUser(null);
  }
}
