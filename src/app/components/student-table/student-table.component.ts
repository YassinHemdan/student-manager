import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
})
export class StudentTableComponent {
  @Input() students: Student[] = [];

  @Output() viewStudent = new EventEmitter<number>();
  @Output() deleteStudent = new EventEmitter<number>();

  onView(id: number): void {
    this.viewStudent.emit(id);
  }

  onDelete(id: number): void {
    this.deleteStudent.emit(id);
  }
}
