import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public signupFormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    password1: new FormControl('', [
      Validators.required
    ]),
    password2: new FormControl('', [
      Validators.required
    ]),
    company: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
    ])
  });

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Validate passwords
    this.authService.signupOwner({
      name: this.signupFormGroup.get('firstName').value,
      lastName: this.signupFormGroup.get('lastName').value,
      password: this.signupFormGroup.get('password1').value,
      company: this.signupFormGroup.get('company').value,
      email: this.signupFormGroup.get('email').value,
      phone: this.signupFormGroup.get('phone').value,
    }).subscribe(result => {
      if (result.success) {
        this.router.navigateByUrl('/sign-up/success');
      } else if (result.error) {
        // TODO: Handle error case
      }
    });
  }
}
