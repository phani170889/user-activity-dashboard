import { Component, OnInit } from '@angular/core';
import { LeftSideNav } from '../left-side-nav/left-side-nav';

@Component({
  selector: 'app-user-dashboard',
  imports: [LeftSideNav],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.scss',
})
export class UserDashboard implements OnInit {
  constructor() {}
  ngOnInit() {}
}
