import { NgModule } from '@angular/core';


import { WayComponent } from './way.component';
// import {CardModule} from 'primeng/card';

import { SharedModule } from '../shared';
import { WayRoutingModule } from './way-routing.module';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [SharedModule, WayRoutingModule,InputTextModule],
  declarations: [WayComponent],
  providers: []
})
export class WayModule {}
