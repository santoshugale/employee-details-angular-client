import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
    selector: 'employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
    private addMode: boolean = false;
    private employee: Employee;
    private columns: string[] = [];
    private employeeList: any[] = [
        {
            'Id': '1',
            'Name': 'santosh',
            'Phone': '111111111',
            'City': 'pune',
            'Address1': 'abcd',
            'Address2': 'xyz',
            'PostalCode': '1234'
        },
        {
            'Id': '2',
            'Name': 'ugale',
            'Phone': '111111111',
            'City': 'pune1',
            'Address1': 'abcd',
            'Address2': 'xyz',
            'PostalCode': '1234'
        },
        {
            'Id': '2',
            'Name': 'anil',
            'Phone': '11111111a',
            'City': 'mumbai',
            'Address1': 'abcd',
            'Address2': 'xyz',
            'PostalCode': '1234'
        },
        {
            'Id': '4',
            'Name': 'ram',
            'Phone': 'asfAS',
            'City': 'nasik',
            'Address1': 'abcd',
            'Address2': 'xyz',
            'PostalCode': '1234'
        },
    ]
    public constructor() {
        this.columns = [
            'Id',
            'Name',
            'Phone',
            'City',
            'Address1',
            'Address2',
            'PostalCode',
            'Edit']
    }

    public addNewEmployee(): void {
        this.employeeList.push(this.employee);
        this.addMode = false;
    }

    public openAddComp(): void {
        this.employee = new Employee();
        this.addMode = true;
    }

    public editEmp(emp: Employee): void {
        this.employee = emp;
        this.addMode = true;
    }
}