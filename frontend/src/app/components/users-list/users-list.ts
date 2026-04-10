import { Component, OnInit, inject, signal } from '@angular/core';

import { UserService } from '../../services/user';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
})
export class UsersList implements OnInit {
  users = signal<any[]>([]);
  private userService = inject(UserService);

  ngOnInit() {
    this.userService.getAll().subscribe((data: any) => {
      this.users.set(data);
    });
  }
}
