import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInController } from './sign-in/sign-in.controller';
import { AdminController } from './admin/admin.controller';


const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInController,
  },
  {
    path: 'admin',
    component: AdminController,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
