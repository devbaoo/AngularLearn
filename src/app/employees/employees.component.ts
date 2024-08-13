import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Employee } from '../employees/employess.type';
import { vietnamPhoneValidator } from '../validators/phone.validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'employees',
  standalone: true,
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //form
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class EmployeesComponent implements OnInit {
  //DI
  constructor(private _formBuilder: FormBuilder) {}
  createEmployeeForm: FormGroup;

  employees: Employee[] = [];

  ngOnInit(): void {
    this.initcreateEmployeeForm();
  }

  private initcreateEmployeeForm() {
    this.createEmployeeForm = this._formBuilder.group({
      name: [null, [Validators.required]],
      email: ['khacbao@gmail.com', [Validators.required]],
      address: [null, [Validators.required]],
      phone: [0, [Validators.required, vietnamPhoneValidator()]],
      salary: [0, [Validators.required]],
      birthday: [null, [Validators.required]],
      joindate: [null, [Validators.required]],
    });
  }
  public createEmployee() {
    if (this.createEmployeeForm.valid) {
      this.employees.push(this.createEmployeeForm.value);
      console.log(this.employees);
    }
  }
}
