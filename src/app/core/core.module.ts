import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule ,
    RouterModule ,
    HttpClientModule ,

  ] ,

  exports:[
    HeaderComponent
  ] ,

  providers: [
    httpInterceptorProviders
  ]
})
export class CoreModule { }
