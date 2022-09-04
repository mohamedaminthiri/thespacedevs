import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./composants/home/home.component";
import {DetailLancementComponent} from "./composants/detail-lancement/detail-lancement.component";
import { PageErreurComponent } from './composants/page-erreur/page-erreur.component';
const routes: Routes = [
  {path:'details/:id',component:DetailLancementComponent},
  {path:'',component:HomeComponent},
  {path:'erreur',component:PageErreurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
