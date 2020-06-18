import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './login.component';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';

@NgModule({
  declarations: [LoginComponent, SpacerComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [MatStepperModule],
})
export class LoginModule {}
