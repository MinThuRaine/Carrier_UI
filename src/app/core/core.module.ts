import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [    
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  declarations: []
})
export class CoreModule { }