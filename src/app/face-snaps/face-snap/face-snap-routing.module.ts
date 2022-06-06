import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from '../component/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from '../component/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from '../component/single-face-snap/single-face-snap.component';

const routes: Routes = [
  { path: '', component: FaceSnapListComponent } ,
  { path: '/:id', component: SingleFaceSnapComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapRoutingModule { }
