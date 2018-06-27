import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee-table/employee';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  @Input() public employee: Employee;
  @Output() public employeeCreated: EventEmitter<void> = new EventEmitter<void>();

  public add(): void {
    this.employeeCreated.emit();
  }
}
