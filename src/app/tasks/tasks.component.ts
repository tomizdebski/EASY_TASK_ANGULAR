import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { Task } from "./task/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskDate } from "./new-task/new-task.module";

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

  tasks = [
    {
      id: "t1",
      userId: 'u1',
      title: "Master Angular",
      summary: "Learn all the basic and advanced concepts of Angular",
      dueDate: '2025-12-31'
    },
    {
      id: "t2",
      userId: 'u3',
      title: "Master React",
      summary: "Learn all the basic and advanced concepts of React",
      dueDate: '2025-12-31'
    },
    {
      id: "t3",
      userId: 'u3',
      title: "Master Vue",
      summary: "Learn all the basic and advanced concepts of Vue",
      dueDate: '2025-12-31'
    },

  ];
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskDate) {
    //this.tasks.push({
      this.tasks.unshift({
      id: Math.random().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.isAddingTask = false;
  }
}
