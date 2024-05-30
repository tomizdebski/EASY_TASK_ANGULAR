import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskDate } from './new-task.module';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskDate>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseDialog() {
    this.closeDialog.emit();
  }
  onSubmitTask() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  };
}
