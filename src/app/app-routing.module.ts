import { HomePageComponent } from './face-snaps/component/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './face-snaps/component/login/login.component';
import { NewFaceSnapComponent } from './face-snaps/component/new-face-snap/new-face-snap.component';

const routes: Routes = [
  { path: 'creerUnFaceSnap', component: NewFaceSnapComponent },
  { path: 'facesnaps' , loadChildren : () => import('./face-snaps/face-snaps.module').then( m => m.FaceSnapsModule )  } ,
  { path: 'home' , component: HomePageComponent } ,
  { path: '', component: LoginComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
