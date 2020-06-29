import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayout } from './dashboard-layout.component';
import { CommonsModule } from 'src/app/shared/modules/commons.module';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    DashboardLayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
  declarations: [DashboardLayout],
})
export class DashboardLayoutModule {}
