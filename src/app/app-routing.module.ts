import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInController } from './sign-in/sign-in.controller';
import { AdminController } from './admin/admin.controller';
import { AdminGuard } from './admin/admin.guard';


const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInController,
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminController,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
