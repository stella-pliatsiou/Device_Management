import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DevicesListComponent } from './device-create/devices-list/devices-list.component';
import { DeviceDetailsComponent } from './device-create/device-details/device-details.component';
import { AddDeviceComponent } from './device-create/add-device/add-device.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeesListComponent,
    DevicesListComponent,
    DeviceDetailsComponent,
    AddDeviceComponent   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }