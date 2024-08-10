import { Component, OnInit } from '@angular/core';
import { Student } from './student.type';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  constructor() {}
  showStudentForm: boolean = false;
  students: Student[] = [];
  newStudent: Student = { id: 0, name: '', address: '', age: 0 };

  ngOnInit(): void {}

  toggleStudentForm() {
    this.showStudentForm = !this.showStudentForm;
  }

  addStudent() {
    this.newStudent.id = this.students.length + 1;
    this.students.push({ ...this.newStudent });
    this.newStudent = { id: 0, name: '', address: '', age: 0 };
  }
}
