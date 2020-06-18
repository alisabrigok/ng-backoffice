import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLayout } from './login-layout.component';
import { LoginComponent } from '../../views/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginLayout,
    children: [{ path: '', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginLayoutRoutingModule {}
