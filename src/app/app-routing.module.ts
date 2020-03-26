import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { CredentialsListComponent } from './credentials-list/credentials-list.component';


const routes: Routes = [
  {path:'credentials-list',component:CredentialsListComponent},
   {path:'add',component:AddComponent},
   { path: '**', redirectTo: 'credentials-list', pathMatch: 'full' }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
