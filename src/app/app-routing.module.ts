import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApropoNousComponent } from './components/products/apropo-nous/apropo-nous.component';
import { ContarezNousComponent } from './components/products/contarez-nous/contarez-nous.component';
import { EditOffreComponent } from './components/products/edit-offre/edit-offre.component';
import { ListEmploysComponent } from './components/products/list-employs/list-employs.component';
import { NewOffreComponent } from './components/products/new-offre/new-offre.component';
import {OffresComponent} from './components/products/offres.component';

const routes: Routes = [
  {
    path:"offres", component:OffresComponent
  },
  {
    path:"newOffre", component:NewOffreComponent
  },
  {
    path:"editOffre/:id", component:EditOffreComponent
  },
  {
    path : "employs", component:ListEmploysComponent
  },

  {
    path : "apropo", component:ApropoNousComponent
  },
  {
    path : "contact", component:ContarezNousComponent
  },
  {path:"",redirectTo:"apropo", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
