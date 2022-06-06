import { NewFaceSnapComponent } from './face-snaps/component/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './face-snaps/component/single-face-snap/single-face-snap.component';
import { HomePageComponent } from './face-snaps/component/home-page/home-page.component';
import { FaceSnapListComponent } from './face-snaps/component/face-snap-list/face-snap-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './face-snaps/component/login/login.component';

const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'home' , component: HomePageComponent } ,
  { path: 'creerUnFaceSnap', component: NewFaceSnapComponent },
  { path: '', component: LoginComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
