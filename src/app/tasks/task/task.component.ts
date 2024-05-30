import { TasksService } from './../tasks.service';
import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { type Task } from "../task/task.model";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";


@Component({
    selector: "app-task",
    standalone: true,
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.css",
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  //@Output() complete = new EventEmitter<string>();
  private TasksService  = inject(TasksService);

  onCompleteTask() {
    this.TasksService.removeTask(this.task.id);
    // this.complete.emit(this.task.id);
    // console.log(this.task.id)
  }
}
