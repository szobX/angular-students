import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] | undefined;
  constructor(private studentService: StudentService) {}
  getStudents(): void {
    this.studentService
      .getStudents()
      .subscribe((students) => (this.students = students));
  }
  create(index: number, firstName: string, lastName: string): void {
    this.studentService
      .createStudent(({
        index: index,
        firstName: firstName,
        lastName: lastName,
      } as unknown) as Student)
      .subscribe((student) => {
        this.students ? this.students.push(student) : null;
      });
  }

  delete(student: Student): void {
    this.students = this.students
      ? this.students.filter((s) => s.id !== student.id)
      : this.students;
    this.studentService.deleteStudent(student).subscribe();
  }

  ngOnInit(): void {
    this.getStudents();
  }
}
