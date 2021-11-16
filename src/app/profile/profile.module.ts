import { NgModule } from '@angular/core';

import { ProfileWaysComponent } from './profile-ways.component';
import { ProfileComponent } from './profile.component';
import { ProfileWayRequestComponent } from './profile-way-request.component';
import { SharedModule } from '../shared';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileWaysComponent,
    ProfileComponent,
    ProfileWayRequestComponent
  ],
  providers: [
  ]
})
export class ProfileModule {}
