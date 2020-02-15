import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  ActivatedRoute,
  Router,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import {UserProfileService} from '../services/user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanLoad {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: UserProfileService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkUserRoles(next.data.roles);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkUserRoles(route.data.roles);
  }

  checkUserRoles(rolesFromRoute): boolean {
    const userRoles = this.profileService.getRoles();
    const roles = rolesFromRoute || [];
    const isEnoughRights = !!roles.length && roles.every((role) => userRoles.find(userRole => userRole === role));

    if (!isEnoughRights) {
      this.router.navigate(['./product-list']);
      return false;
    }

    return true;
  }
}
