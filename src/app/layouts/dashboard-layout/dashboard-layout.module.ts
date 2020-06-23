import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayout } from './dashboard-layout.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardLayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
  ],
  declarations: [DashboardLayout],
})
export class DashboardLayoutModule {}
