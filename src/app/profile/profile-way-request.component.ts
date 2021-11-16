import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WayListConfig, Profile } from '../core';

@Component({
  selector: 'app-profile-way-request',
  templateUrl: './profile-way-request.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileWayRequestComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  profile: Profile;
  waysConfig: WayListConfig = {
    type: 'feed',
    filters: {}
  };

  ngOnInit() {
    console.log("ROUTE PARENT ",this.route.parent);
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.waysConfig = {...this.waysConfig};
        console.log("DATA",this.waysConfig);
        this.waysConfig.filters.requested = this.profile.username;
        this.cd.markForCheck();
      }
    );
  }

}
