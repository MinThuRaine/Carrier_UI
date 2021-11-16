import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [{
  path: 'way',
  loadChildren: () => import('./way/way.module').then(m => m.WayModule)
},
{
  path: 'way-order',
  loadChildren: () => import('./way-order/way-order.module').then(m => m.WayOrderModule)
},
{
  path: 'settings',
  loadChildren: () => import('./setting/settings.module').then(m => m.SettingsModule)
},
{
  path: 'profile',
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
},
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: QuicklinkStrategy,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
