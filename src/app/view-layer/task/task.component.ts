import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { unexposedTask } from 'src/app/model-layer';
import { BaseStatusList } from 'src/app/model-layer/task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @Input() task!: unexposedTask;
  @Output() onDelete = new EventEmitter<unexposedTask>();
  @Output() onUpdate = new EventEmitter<unexposedTask>();
  @Output() onComplete = new EventEmitter<unexposedTask>();



  // description: string;
  // status: string;
  // id: number;
  isCompleted!: boolean;



  constructor() { }
  ngOnInit(): void {
    this.isCompleted = this.task.status.toLowerCase() === BaseStatusList.completed;
  }

  completeTask(): void {
    this.onComplete.emit(this.task);
  }

  deleteTask(): void {
    this.onDelete.emit(this.task);
  }


  updateTask(): void {
    this.onUpdate.emit(this.task);
  }

}
