import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileWaysComponent } from './profile-ways.component';
import { ProfileWayRequestComponent } from './profile-way-request.component';
import { ProfileResolver } from './profile-resolver.service';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
  {
    path: ':username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    },
    children: [
      {
        path: '',
        component: ProfileWaysComponent
      },
      {
        path: 'request',
        component: ProfileWayRequestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
