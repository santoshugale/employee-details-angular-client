import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
    public allSelected: boolean = false;
    public columns: string[] = [];
    public employeeList: Employee[];

    public constructor(private empService: EmployeeService,
        private router: Router) {
        this.columns = ['Id', 'Name', 'Phone', 'City', 'Edit', 'Delete'];
        this.getEmployeeList();
    }

    public apiChange(value: string): void {
        if (value == 'mockData') {
            this.empService.setUseMockData(true);
        } else {
            this.empService.setUseMockData(false);
        }
        this.getEmployeeList();
    }

    public addEmp(): void {
        this.router.navigateByUrl('add-employee');
    }

    public editEmp(id: number): void {
        this.router.navigateByUrl('edit-employee/' + id);
    }

    public deleteEmp(id: number): void {
        this.empService.deleteEmployee(id).subscribe((value: number) => {
            console.log(value);
            this.getEmployeeList();
        }, (error: Error) => {
            console.log('can not delete the emp');
        });
    }

    public allSelectedClicked(value: boolean): void {
        this.employeeList.forEach((employee: Employee) => {
            employee.Selected = value;
        });
    }

    public employeeSelectionChange() {
        let allSelected = true;
        this.employeeList.forEach((employee: Employee) => {
            if (!employee.Selected)
                allSelected = false;
        });
        this.allSelected = allSelected;
    }
    private getEmployeeList(): void {
        this.empService.getEmployeeList().subscribe((empList: Employee[]) => {
            this.employeeList = empList;
        }, (error: Error) => {
            this.employeeList = [];
        });
    }
}