import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DevicesListComponent } from './device-create/devices-list/devices-list.component';
import { AddDeviceComponent } from './device-create/add-device/add-device.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  { path: 'devices-list', component: DevicesListComponent },
  { path: 'add-device', component: AddDeviceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }