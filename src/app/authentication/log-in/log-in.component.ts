import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  submitForm() {
    //cuando se haga submit ir al dashboard
    if (this.loginForm.invalid) return;
    this.router.navigate(['/']);
  }
}
