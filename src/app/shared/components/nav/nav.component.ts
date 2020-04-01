import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserRole } from '../../../core/models/role.enum';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { AppState } from '../../../core/store/app.state';
import { ResetOrders } from '../../../core/store/orders/orders.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent {

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
    private store: Store<AppState>
  ) {
    this.isUserAuthorized$ = this.profileService.isLogin$;
  }

  logout(): void {
    this.profileService.changeUser(null);
    this.store.dispatch(new ResetOrders());


    if (this.router.url.indexOf('admin') > -1 || this.router.url.indexOf('orders') > -1) {
      this.router.navigate(['auth']);
    }
  }

}
