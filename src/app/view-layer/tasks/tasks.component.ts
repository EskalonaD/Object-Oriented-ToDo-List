import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unexposedTask } from 'src/app/model-layer';
import { TasksView } from '../tasks.view';

enum EditorType {
  create = 'create',
  update = 'update',
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent extends TasksView implements OnInit {
  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  goToEditor(editorType: 'update', task: unexposedTask): void;
  goToEditor(editorType: 'create'): void;
  goToEditor(editorType: any, task?: any): void {
    if(task) {
      this.router.navigate([task.id, editorType]);
      return;
    }
    this.router.navigate([editorType]);
  }

}

