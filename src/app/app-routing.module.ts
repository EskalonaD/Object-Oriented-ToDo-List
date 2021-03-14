import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './temp/panel/panel.component';
import { PageNotFoundComponent } from './view-layer/page-not-found/page-not-found.component';
import { TasksComponent } from './view-layer/tasks/tasks.component';

const routes: Routes = [
  {path: '', component: PanelComponent, pathMatch: 'full'},
  {path: 'tasks', component: TasksComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
