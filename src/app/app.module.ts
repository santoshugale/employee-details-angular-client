import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { NameAndCityFilterPipe } from './name-and-city-filter.pipe';
import { PhoneFilterPipe } from './phone-filter.pipe';
import { AddEditEmployeeComponent } from './add-employee/add-employee.component';
import { SelectedEmployeeComponent } from './selected-employee/selected-employee.component';

const route: Routes = [
  {
    path: '',
    component: EmployeeTableComponent
  },
  {
    path: 'employee-list',
    component: EmployeeTableComponent
  },
  {
    path: 'add-employee',
    component: AddEditEmployeeComponent
  },
  {
    path: 'edit-employee/:id',
    component: AddEditEmployeeComponent
  },
  {
    path: 'selected-employee',
    component: SelectedEmployeeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    NameAndCityFilterPipe,
    PhoneFilterPipe,
    AddEditEmployeeComponent,
    SelectedEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
