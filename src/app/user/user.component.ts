import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from './user.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [FormsModule, CommonModule],
})
export class UserComponent implements OnInit {
  constructor() {}
  email: string = 'khacbao0712@gmail.com';
  students: Student[] = [
    {
      id: 1,
      name: 'Bao',
      age: 20,
      address: 'Vietnam',
    },
    {
      id: 2,
      name: 'Hung',
      age: 21,
    },
    {
      id: 3,
      name: 'Huy',
      age: 22,
    },
  ];
  isBlue: boolean = true;
  myClasscss: string = 'text-blue';
  student: Student = {
    id: 4,
    name: 'Hieu',
    age: 23,
  };

  ngOnInit(): void {}
  logEmail() {
    console.log(this.email);
  }

  changeColor() {
    this.isBlue = !this.isBlue;
  }

  addStudentToArray() {
    this.students.push(this.student);
    console.log(this.students);
  }
}
