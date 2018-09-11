import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-selected-employee',
  templateUrl: './selected-employee.component.html',
  styleUrls: ['./selected-employee.component.css']
})
export class SelectedEmployeeComponent implements OnInit {

  constructor(private empSer: EmpService) { }

  ngOnInit() {
  }

}
