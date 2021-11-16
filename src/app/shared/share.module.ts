import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RequestButtonComponent,FollowButtonComponent } from './buttons';
import { WayListComponent,WayMetaDataComponent,WayPreviewComponent } from './way-helpers';
import { AuthedDirective } from './auth.directive';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    WayListComponent,
    WayMetaDataComponent,
    WayPreviewComponent,
    RequestButtonComponent,
    FollowButtonComponent,
    AuthedDirective
  ],
  exports: [
    WayListComponent,
    WayMetaDataComponent,
    WayPreviewComponent,
    RequestButtonComponent,
    FollowButtonComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    AuthedDirective

  ]
})
export class SharedModule {}
