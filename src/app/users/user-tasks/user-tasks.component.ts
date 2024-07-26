import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit, OnChanges, OnDestroy {
  // @Input({ required: true }) userId!: string;
  userName?: string;
  subscription!: Subscription;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) =>
        (this.userName =
          this.userService.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || ''),
    });
    // this.loadUserName();
  }

  ngOnChanges() {
    // this.loadUserName();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // loadUserName() {
  //   this.userName = this.userService.users.find(
  //     (user) => user.id === this.userId
  //   )?.name;
  // }
}
