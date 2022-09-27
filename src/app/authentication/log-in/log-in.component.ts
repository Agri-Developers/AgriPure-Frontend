import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  submitted = false;
  hide = true;

  loginForm = this.formBuilder.group({
    // [lo que debe Tener, {[validaciones], updateOn: 'change'}]
    email: ['', {validators: [Validators.required, Validators.email], updateOn: 'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(8)], updateOn: 'change'}],
  })

  constructor(private formBuilder: FormBuilder) { }

  submitForm() {
    //cuando se haga submit ir al dashboard
    this.submitted = true;
    console.log({
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    });
  }
}
