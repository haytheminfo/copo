import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { AddDptComponent } from './add-dpt/add-dpt.component';
import { ListDptComponent } from './list-dpt/list-dpt.component';
import { DeptComponent } from './dept/dept.component';


@NgModule({
  declarations: [
    AddDptComponent,
    ListDptComponent,
    DeptComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule
  ]
})
export class DashboardAdminModule { }
