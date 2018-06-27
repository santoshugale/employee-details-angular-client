import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee-table/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private host: string = 'http://localhost:64498/api/employee/'
    public constructor(private http: HttpClient) { }

    public getEmployeeList(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.host + 'GetEmployeeList');
    }

    public addEmployee(employee: Employee): Observable<number> {
        return this.http.post<number>(this.host + 'AddEmployee', employee);
    }
}