import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Employee } from '../employee-table/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  public employee: Employee = new Employee(0, '', 0, '');
  private addMode: boolean = false;

  public constructor(private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.params.subscribe((paramMap: ParamMap) => {
      if (paramMap['id']) {
        const id: number = paramMap['id'];
        this.empService.getEmployee(+id).subscribe((emp: Employee) => {
          this.employee = emp;
        });
      } else {
        this.addMode = true;
      }
    })
  }

  public add(): void {
    this.empService.addEmployee(this.employee).subscribe((value: number) => {
      console.log(value);
      this.router.navigateByUrl('employee-list');
    }, (error: Error) => {
      console.log('unable to add the emp');
      this.router.navigateByUrl('employee-list');
    });
  }

  public update(): void {
    this.empService.updateEmployee(this.employee).subscribe((value: number) => {
      console.log(value);
      this.router.navigateByUrl('employee-list');
    }, (error: Error) => {
      console.log('unable to add the emp');
      this.router.navigateByUrl('employee-list');
    });
  }
}
