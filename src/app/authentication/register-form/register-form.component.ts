import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  submitted = false;
  hide = true;

  registerForm = this.formBuilder.group({
    username: ['', {validators: [Validators.required], updateOn: 'change'}],
    email: ['', {validators: [Validators.required, Validators.email], updateOn: 'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(8)], updateOn: 'change'}],
    terms: [false, {validators: [Validators.requiredTrue], updateOn: 'change'}]
  })

  constructor(private formBuilder: FormBuilder) { }

  submitForm() {
    //cuando se haga submit ir al dashboard
    this.submitted = true;
    console.log({
      username: this.registerForm.controls.username.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      terms: this.registerForm.controls.terms.value,
    });
  }
}
