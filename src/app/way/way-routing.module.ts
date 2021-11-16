import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WayComponent } from './way.component';
import { WayResolver } from './way-resolver.service';
import { AuthGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: WayComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':slug',
    component: WayComponent,
    canActivate: [AuthGuard],
    resolve: {
      article: WayResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WayRoutingModule {}
