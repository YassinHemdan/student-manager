import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
})
export class AddStudentComponent {
  firstName: string = '';
  lastName: string = '';
  age: number | null = null;
  gender: string = 'Male';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  country: string = '';
  department: string = '';
  level: number | null = null;
  GPA: number | null = null;
  enrollmentDate: string = '';
  isActive: boolean = true;
  showSuccess: boolean = false;

  constructor(
    private studentsService: StudentsService,
    private router: Router,
  ) {}

  onSubmit(): void {
    const newStudent: Student = {
      id: this.studentsService.getNextId(),
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age || 0,
      gender: this.gender,
      email: this.email,
      phone: this.phone,
      address: this.address,
      city: this.city,
      country: this.country,
      department: this.department,
      level: this.level || 1,
      GPA: this.GPA || 0,
      enrollmentDate: this.enrollmentDate,
      isActive: this.isActive,
    };

    this.studentsService.addStudent(newStudent);

    this.showSuccess = true;

    setTimeout(() => {
      this.router.navigate(['/students']);
    }, 1500);
  }
}
