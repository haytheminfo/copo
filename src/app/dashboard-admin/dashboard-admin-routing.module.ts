import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { ListDptComponent } from './list-dpt/list-dpt.component';
import { AddDptComponent } from './add-dpt/add-dpt.component';

const routes: Routes = [

  {
    path: '',
    component: DeptComponent,
    children:[
      {
        path: 'listadmin', component:ListDptComponent
      },
      {
        path: 'addadmin',component:AddDptComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
