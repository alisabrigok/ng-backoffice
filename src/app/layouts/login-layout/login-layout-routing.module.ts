import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLayout } from './login-layout.component';
import { Login } from '../../views/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginLayout,
    children: [{ path: '', component: Login }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginLayoutRoutingModule {}
