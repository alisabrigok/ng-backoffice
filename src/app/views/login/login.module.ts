import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule } from '@angular/material/stepper';
import { Login } from './login.component';

@NgModule({
  declarations: [Login],
  imports: [CommonModule, MatStepperModule],
  exports: [MatStepperModule],
})
export class LoginModule {}
