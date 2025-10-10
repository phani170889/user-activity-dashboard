import { Component, OnInit } from '@angular/core';
import { LeftSideNav } from '../left-side-nav/left-side-nav';
import { ApiClientService } from '../api-client-service';

@Component({
  selector: 'app-user-dashboard',
  imports: [LeftSideNav],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.scss',
})
export class UserDashboard implements OnInit {
  profileData: any;
  constructor(private apiClientService: ApiClientService) {}
  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.apiClientService.get("/api/user/profile").subscribe((data: any) => {
      if (data) {
        this.profileData = data;
        console.log("user profile data...", data)
      }
    })
  }
}
