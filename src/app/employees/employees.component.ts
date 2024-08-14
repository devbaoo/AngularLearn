import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
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
import { birthdateValidator } from '../validators/birthday.validator';
import { joinDateValidator } from '../validators/joindate.validator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
  ],
})
export class EmployeesComponent implements OnInit {
  isDarkMode: boolean = false;
  currentView: 'create' | 'view' = 'create';
  createEmployeeForm: FormGroup;
  employees: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>(this.employees);
  displayedColumns: string[] = [
    'name',
    'email',
    'address',
    'phone',
    'salary',
    'birthday',
    'joindate',
  ];
  loading: boolean = false; // Spinner visibility state

  constructor(private _formBuilder: FormBuilder) {}

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
      birthday: [null, [Validators.required, birthdateValidator()]],
      joindate: [null, [Validators.required, joinDateValidator()]],
    });
  }

  public createEmployee() {
    if (this.createEmployeeForm.valid) {
      this.loading = true; // Show the spinner

      setTimeout(() => {
        this.employees.push(this.createEmployeeForm.value);
        this.dataSource.data = this.employees;
        console.log(this.employees);
        console.log(this.createEmployeeForm.get('birthday')?.errors);

        this.loading = false; // Hide the spinner after data is loaded
      }, 3000); // 3 seconds delay
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
  setView(view: 'create' | 'view') {
    this.currentView = view;
  }
}
