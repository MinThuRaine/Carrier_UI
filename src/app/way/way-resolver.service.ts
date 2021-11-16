import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Way, WaysService, UserService } from '../core';
import { catchError ,  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WayResolver implements Resolve<Way> {
  constructor(
    private waysService: WaysService,
    private router: Router,
    private userService: UserService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.waysService.get(route.params['slug'])
      .pipe(
        map(
          way => {
            if (this.userService.getCurrentUser().username === way.owner.username) {
              return way;
            } else {
              this.router.navigateByUrl('/');
            }
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
