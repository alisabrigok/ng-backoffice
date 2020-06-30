import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayout implements OnInit {
  title: String = this.route.snapshot.firstChild.data.title;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    titleService: Title
  ) {
    titleService.setTitle(`${this.title} - Backoffice`);
  }

  ngOnInit(): void {}

  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
