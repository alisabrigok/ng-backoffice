import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayout } from './dashboard-layout.component';

@NgModule({
  imports: [CommonModule, DashboardLayoutRoutingModule],
  declarations: [DashboardLayout],
})
export class DashboardLayoutModule {}
