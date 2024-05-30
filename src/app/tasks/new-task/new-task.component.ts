import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskDate } from './new-task.module';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCloseDialog() {
    this.closeDialog.emit();
  }
  onSubmitTask() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.closeDialog.emit();
  };
}
