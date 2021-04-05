import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/professional/professional.module').then(m => m.ProfessionalModule) },
  { path: 'professional', loadChildren: () => import('./Modules/professional/professional.module').then(m => m.ProfessionalModule) },
  { path: 'personal', loadChildren: () => import('./Modules/personal/personal.module').then(m => m.PersonalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
