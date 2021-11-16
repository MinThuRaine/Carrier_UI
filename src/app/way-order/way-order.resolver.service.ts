import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Way, WaysService, UserService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WayOrderResolver implements Resolve<Way> {
  constructor(
    private waysService: WaysService,
    private router: Router,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
console.log("HELLOLO");
    return this.waysService.get(route.params['slug'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
