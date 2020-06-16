import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutRoutingModule } from './login-layout-routing.module';
import { LoginLayout } from './login-layout.component';
import { LoginModule } from '../../views/login/login.module';

@NgModule({
  imports: [CommonModule, LoginLayoutRoutingModule, LoginModule],
  declarations: [LoginLayout],
})
export class LoginLayoutModule {}
