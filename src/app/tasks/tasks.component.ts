import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { Task } from "./task/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskDate } from "./new-task/new-task.module";
import { TasksService } from "./tasks.service";

@Component({
    selector: "app-tasks",
    standalone: true,
    templateUrl: "./tasks.component.html",
    styleUrl: "./tasks.component.css",
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;


  constructor(private tasksService: TasksService) {}


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskDate) {
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
