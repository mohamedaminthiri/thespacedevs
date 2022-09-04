import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./composants/home/home.component";
import {DetailLancementComponent} from "./composants/detail-lancement/detail-lancement.component";
const routes: Routes = [
  {path:'details/:id',component:DetailLancementComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
