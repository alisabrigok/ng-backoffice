import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayout implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
