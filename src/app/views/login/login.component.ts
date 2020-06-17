import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class Login implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  proceed(event: MouseEvent, stepper: MatStepper): void {
    event.preventDefault();
    stepper.next();
  }
}
