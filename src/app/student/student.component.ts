import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog and MatDialogModule
import { Student, StudentCreate } from './student.type';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component'; // Import StudentDialogComponent

@Component({
  selector: 'student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule, // Add MatDialogModule to imports
  ],
})
export class StudentComponent implements OnInit {
  students = new MatTableDataSource<Student>([]);
  displayedColumns: string[] = ['name', 'age', 'email', 'phone', 'actions'];

  // Inject MatDialog into the component
  constructor(
    private _studentService: StudentService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    this._studentService.getStudent().subscribe({
      next: (result: Student[]) => {
        this.students.data = result;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('call API complete');
      },
    });
  }

  createStudent() {
    const dialogRef = this._dialog.open(StudentDialogComponent, {
      width: '400px',
      data: null, // Khi tạo mới, data sẽ là null
    });

    dialogRef.afterClosed().subscribe((result: StudentCreate) => {
      if (result) {
        this._studentService.createStudent(result).subscribe({
          next: (newStudent: Student) => {
            this.loadStudent();
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log('call API complete');
          },
        });
      }
    });
  }

  deleteStudent(id: string) {
    this._studentService.deleteStudent(id).subscribe({
      next: () => {
        this.loadStudent();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Student deleted');
      },
    });
  }
  viewStudent(studentId: string) {
    this._studentService.getStudentById(studentId).subscribe({
      next: (student: Student) => {
        const dialogRef = this._dialog.open(StudentDialogComponent, {
          width: '400px',
          data: student,
        });

        dialogRef.afterClosed().subscribe((result: Student) => {
          if (result && result.id) {
            // Ensure that ID is present
            this._studentService.updateStudent(result).subscribe({
              next: () => {
                this.loadStudent();
              },
              error: (error) => {
                console.log(error);
              },
              complete: () => {
                console.log('Student updated');
              },
            });
          } else {
            console.error('Update failed: Student ID is missing');
          }
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
