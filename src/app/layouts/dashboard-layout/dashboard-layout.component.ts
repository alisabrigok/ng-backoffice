import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayout implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  title = this.route.snapshot.data.title;

  ngOnInit(): void {}

  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
