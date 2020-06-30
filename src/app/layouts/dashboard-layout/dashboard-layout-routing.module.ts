import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayout } from './dashboard-layout.component';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { ApplicationListComponent } from 'src/app/views/application-list/application-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
    ],
  },
  {
    path: 'application',
    component: DashboardLayout,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ApplicationListComponent,
        data: { title: 'Application List' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLayoutRoutingModule {}
