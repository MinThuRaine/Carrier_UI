import { NgModule } from '@angular/core';

import { WayOrderComponent } from './way-order.component';
import { WayOrderCommentComponent } from './way-order-comment.component';
import { SharedModule } from '../shared';
import { WayOrderRoutingModule } from './way-order-routing.module';
import { MarkdownPipe } from './pipe-helper/markdown.pipe';

@NgModule({
  imports: [
    SharedModule,
    WayOrderRoutingModule,
  ],
  declarations: [
    WayOrderComponent,
    WayOrderCommentComponent,
    MarkdownPipe
  ],

  providers: [
  ]
})
export class WayOrderModule {}
