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
    private editMode: boolean = false;
    private employee: Employee;
    private columns: string[] = [];
    private employeeList: Employee[];
    public constructor(private empService: EmployeeService) {
        this.columns = ['Id', 'Name', 'Phone', 'City', 'Edit', 'Delete'];
        this.getEmployeeList();
    }

    public addNewEmployee(): void {
        if (this.addMode) {
            this.empService.addEmployee(this.employee).subscribe((value: number) => {
                console.log(value);
                this.getEmployeeList();
            });
            this.addMode = false;
        } else if (this.editEmp) {
            this.empService.updateEmployee(this.employee).subscribe((value: number) => {
                console.log(value);
                this.getEmployeeList();
            });
            this.editMode = false;
        }
    }

    public openAddComp(): void {
        this.employee = new Employee(0, '', '', '');
        this.addMode = true;

    }

    public editEmp(emp: Employee): void {
        this.employee = emp;
        this.editMode = true;
    }

    public deleteEmp(id: number): void {
        this.empService.deleteEmployee(id).subscribe((value: number)=>{
            console.log(value);
            this.getEmployeeList();
        });
    }
    private getEmployeeList(): void {
        this.empService.getEmployeeList().subscribe((empList: Employee[]) => {
            this.employeeList = empList;
        });
    }
}