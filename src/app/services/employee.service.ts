import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, EmptyError } from 'rxjs';
import { Employee } from '../employee-table/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private host: string = 'http://localhost:64498/api/employee/'
    private useMockData: boolean = true;
    private mockEmployeeList: Employee[] = [
        new Employee(0, 'John', 1111111111, 'Pune'),
        new Employee(1, 'Oliver', 2222222222, 'Mumbai'),
        new Employee(2, 'Superman', 3333333333, 'Delhi'),
        new Employee(3, 'Spiderman', 1111111111, 'Nashik'),
        new Employee(4, 'ABCD', 1111111111, 'Pune1')];

    public constructor(private http: HttpClient) { }

    public setUseMockData(value: boolean): void {
        this.useMockData = value;
    }

    public getEmployeeList(): Observable<Employee[]> {
        if (this.useMockData)
            return of(this.mockEmployeeList);
        return this.http.get<Employee[]>(this.host + 'GetEmployeeList');
    }

    public getEmployee(id: number): Observable<Employee> {
        if (this.useMockData)
            return of(this.mockEmployeeList.find((emp: Employee) => { return emp.Id === id; }));
        return this.http.get<Employee>(this.host + 'GetEmployee/' + id);
    }

    public addEmployee(employee: Employee): Observable<number> {
        if (this.useMockData) {
            employee.Id == this.mockEmployeeList.length;
            this.mockEmployeeList.push(employee);
            return of(employee.Id);
        }
        return this.http.post<number>(this.host + 'AddEmployee', employee);
    }

    public updateEmployee(employee: Employee): Observable<number> {
        if (this.useMockData) {
            this.mockEmployeeList.forEach((ele: Employee) => {
                if (ele.Id === employee.Id) {
                    ele = employee;
                }
            });
            return of(200);
        }
        return this.http.put<number>(this.host + 'UpdateEmployee', employee);
    }

    public deleteEmployee(id: number): Observable<number> {
        if (this.useMockData) {
            this.mockEmployeeList.slice(this.mockEmployeeList.find((emp: Employee) => emp.Id === id).Id, 1);
            return of(200);
        }
        return this.http.delete<number>(this.host + 'DeleteEmployee/' + id);
    }
}
