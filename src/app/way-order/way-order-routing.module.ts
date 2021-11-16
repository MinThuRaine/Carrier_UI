import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WayOrderComponent } from './way-order.component';
import { WayOrderResolver } from './way-order.resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: WayOrderComponent,
    resolve: {
      way: WayOrderResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WayOrderRoutingModule {}
