import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserRole} from '../../../core/models/role.enum';
import {UserProfileService} from '../../../core/services/user-profile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  isUserAuthorized$: Observable<boolean>;

  routes = [{
    label: 'Home',
    link: '/product-list'
  }, {
    label: 'Admin',
    link: '/admin',
    roles: [UserRole.ADMIN]
  }];

  constructor(
    private router: Router,
    private profileService: UserProfileService,
  ) {
    this.isUserAuthorized$ = this.profileService.isLogin$;
  }

  ngOnInit() {
  }

  logout(): void {
    this.profileService.changeUser(null);

    if (this.router.url.indexOf('admin') > -1 ) {
      this.router.navigate(['auth']);
    }
  }

}
