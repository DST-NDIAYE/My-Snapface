import { HomePageComponent } from './home-page/home-page.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },

  { path: 'facesnaps', component: FaceSnapListComponent }
  ,
  { path: '' , component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
