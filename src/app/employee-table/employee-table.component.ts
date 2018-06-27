import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
    private addMode: boolean = false;
    private employee: Employee;
    private columns: string[] = [];
    private employeeList: Employee[];
    public constructor(private empService: EmployeeService) {
        this.columns = ['Id', 'Name', 'Phone', 'City', 'Edit'];
        this.getEmployeeList();
    }

    public addNewEmployee(): void {
        this.empService.addEmployee(this.employee).subscribe((value: number) => {
            console.log(value);
            this.getEmployeeList();
        });
        this.addMode = false;
    }

    public openAddComp(): void {
        this.employee = new Employee(0, '', '', '');
        this.addMode = true;
    }

    public editEmp(emp: Employee): void {
        this.employee = emp;
        this.addMode = true;
    }

    private getEmployeeList(): void {
        this.empService.getEmployeeList().subscribe((empList: Employee[]) => {
            this.employeeList = empList;
        });
    }
}