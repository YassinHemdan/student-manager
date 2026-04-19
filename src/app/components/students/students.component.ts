import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  private subscription!: Subscription;

  constructor(
    private studentsService: StudentsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subscription = this.studentsService.students$.subscribe((data) => {
      this.students = data;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onViewStudent(id: number): void {
    this.router.navigate(['/student', id]);
  }

  onDeleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentsService.deleteStudent(id);
    }
  }
}
