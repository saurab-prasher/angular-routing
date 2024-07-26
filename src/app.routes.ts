import { Routes } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './app/tasks/new-task/new-task.component';

export const routes: Routes = [
  { path: '', component: NoTaskComponent },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: [
      {
        path: 'tasks', // <your-domain>/users/:userId/tasks
        component: TasksComponent,
      },

      {
        path: 'tasks/new',
        component: NewTaskComponent,
      },
    ],
  },
];
