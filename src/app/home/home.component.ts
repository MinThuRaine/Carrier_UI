import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { WayListConfig, TagsService, UserService } from '../core';

@Component({
    selector: 'carrier-home-page',
    templateUrl: './home.component.html',
  })

export class HomeComponent implements OnInit {
    constructor(
        private router: Router,
        private userService: UserService,
        private cd: ChangeDetectorRef
    ) { }

    isAuthenticated : boolean = false
    listConfig: WayListConfig = {
        type: 'all',
        filters: {}
    };
    tags: Array<string> = [];
    tagsLoaded = false;

    ngOnInit() {
        this.userService.isAuthenticated.subscribe(
            (authenticated) => {
                this.isAuthenticated = authenticated;
console.log(this.isAuthenticated);

                //set the article list accordingly
                if (authenticated) {
                  this.setListTo('all');
                } else {
                  this.setListTo('all');
                }
                this.cd.markForCheck();
            });
    }


  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
    console.log("I GOT DATA", JSON.stringify(this.listConfig));
  }
}