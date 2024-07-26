import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit, OnChanges {
  @Input({ required: true }) userId!: string;
  userName?: string;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUserName();
  }

  ngOnChanges() {
    this.loadUserName();
  }

  loadUserName() {
    this.userName = this.userService.users.find(
      (user) => user.id === this.userId
    )?.name;
  }
}
