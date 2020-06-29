import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './login.component';
import { CommonsModule } from 'src/app/shared/modules/commons.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CommonsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MatStepperModule],
})
export class LoginModule {}
