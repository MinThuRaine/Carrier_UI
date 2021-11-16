import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WayListConfig, Profile } from '../core';

@Component({
  selector: 'app-profile-ways',
  templateUrl: './profile-ways.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileWaysComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  profile: Profile;
  waysConfig: WayListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.waysConfig = {
          type: 'all',
          filters: {}
        }; // Only method I found to refresh article load on swap
        this.waysConfig.filters.owner = this.profile.username;
        this.cd.markForCheck();
      }
    );
  }

}
