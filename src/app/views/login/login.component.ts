import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('stepper') stepper;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  initLogin(): void {
    // add login init call, on success slide-in the second step.
    this.stepper.next();
  }

  verifyOtp(): void {
    // add verify otp call, on success log user in.
    this.stepper.next();
    this.logUserIn();
  }

  logUserIn(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
    }, 1233);
  }

  proceed(event: MouseEvent): void {
    event.preventDefault();
    switch (this.stepper.selectedIndex) {
      case 0:
        this.initLogin();
        break;
      case 1:
        this.verifyOtp();
        break;
      default:
        return;
    }
  }

  back(event: MouseEvent): void {
    event.preventDefault();
    this.stepper.previous();
  }
}
