import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayout } from './dashboard-layout.component';
import { Dashboard } from '../../views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [{ path: '', component: Dashboard }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLayoutRoutingModule {}
