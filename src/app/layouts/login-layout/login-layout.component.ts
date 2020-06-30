import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
})
export class LoginLayout implements OnInit {
  private title: String = this.route.snapshot.firstChild.data.title;

  constructor(private route: ActivatedRoute, titleService: Title) {
    titleService.setTitle(`${this.title} - Backoffice`);
  }

  ngOnInit(): void {}
}
