import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private studentsSubject = new BehaviorSubject<Student[]>([
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Hassan',
      age: 21,
      gender: 'Male',
      email: 'ali.hassan@email.com',
      phone: '01000000001',
      address: '12 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Computer Science',
      level: 3,
      GPA: 3.2,
      enrollmentDate: '2023-09-01',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Sara',
      lastName: 'Ahmed',
      age: 22,
      gender: 'Female',
      email: 'sara.ahmed@email.com',
      phone: '01000000002',
      address: '45 Nile Road',
      city: 'Alexandria',
      country: 'Egypt',
      department: 'Engineering',
      level: 4,
      GPA: 3.8,
      enrollmentDate: '2022-09-01',
      isActive: true,
    },
    {
      id: 3,
      firstName: 'Omar',
      lastName: 'Khaled',
      age: 20,
      gender: 'Male',
      email: 'omar.khaled@email.com',
      phone: '01000000003',
      address: '78 Garden City',
      city: 'Giza',
      country: 'Egypt',
      department: 'Medicine',
      level: 2,
      GPA: 3.5,
      enrollmentDate: '2024-09-01',
      isActive: true,
    },
    {
      id: 4,
      firstName: 'Nour',
      lastName: 'Ibrahim',
      age: 23,
      gender: 'Female',
      email: 'nour.ibrahim@email.com',
      phone: '01000000004',
      address: '90 Tahrir Square',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Business',
      level: 4,
      GPA: 2.9,
      enrollmentDate: '2022-02-01',
      isActive: false,
    },
    {
      id: 5,
      firstName: 'Youssef',
      lastName: 'Mostafa',
      age: 19,
      gender: 'Male',
      email: 'youssef.mostafa@email.com',
      phone: '01000000005',
      address: '33 Corniche Road',
      city: 'Mansoura',
      country: 'Egypt',
      department: 'Computer Science',
      level: 1,
      GPA: 3.0,
      enrollmentDate: '2025-09-01',
      isActive: true,
    },
  ]);

  students$: Observable<Student[]> = this.studentsSubject.asObservable();

  constructor() {}

  getStudentById(id: number): Student | undefined {
    const students = this.studentsSubject.getValue();
    return students.find((s) => s.id === id);
  }

  addStudent(newStudent: Student): void {
    const currentStudents = this.studentsSubject.getValue();
    const updatedStudents = [...currentStudents, newStudent];
    this.studentsSubject.next(updatedStudents);
  }

  deleteStudent(id: number): void {
    const currentStudents = this.studentsSubject.getValue();
    const updatedStudents = currentStudents.filter((s) => s.id !== id);
    this.studentsSubject.next(updatedStudents);
  }

  getNextId(): number {
    const students = this.studentsSubject.getValue();
    return students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
  }
}
