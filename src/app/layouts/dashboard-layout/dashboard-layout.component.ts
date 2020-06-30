import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayout implements OnInit {
  title: String = this.route.snapshot.firstChild.data.title;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    titleService: Title,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    titleService.setTitle(`${this.title} - Backoffice`);

    this.mobileQuery = media.matchMedia('(max-width: 1200px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
