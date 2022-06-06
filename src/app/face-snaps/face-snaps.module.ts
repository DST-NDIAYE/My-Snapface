import { HomeComponent } from './../../../../../sama-dara/frontend/src/app/home/home.component';
import { FaceSnapListComponent } from './component/face-snap-list/face-snap-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './component/face-snap/face-snap.component';
import { LoginComponent } from './component/login/login.component';
import { SingleFaceSnapComponent } from './component/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './component/new-face-snap/new-face-snap.component';



@NgModule({
  declarations: [
    FaceSnapComponent ,
    FaceSnapListComponent ,
    HomeComponent ,
    LoginComponent ,
    SingleFaceSnapComponent ,
    NewFaceSnapComponent

  ],
  imports: [
    CommonModule ,
    ReactiveFormsModule ,
    RouterModule
  ] ,
  exports: [

    FaceSnapComponent ,
    FaceSnapListComponent ,
    HomeComponent ,
    LoginComponent ,
    SingleFaceSnapComponent ,
    NewFaceSnapComponent

  ]
})
export class FaceSnapsModule { }
