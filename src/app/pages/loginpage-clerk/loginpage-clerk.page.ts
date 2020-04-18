import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage-clerk',
  templateUrl: './loginpage-clerk.page.html',
  styleUrls: ['./loginpage-clerk.page.scss'],
})
export class LoginpageClerkPage implements OnInit {

  public loginFormGroup = new FormGroup({
    location: new FormControl('', [
      Validators.required
    ]),
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.authenticateClerk(
      this.loginFormGroup.get('location').value,
      this.loginFormGroup.get('username').value,
      this.loginFormGroup.get('password').value,
    ).subscribe(response => {
      if (response.success) {
        // TODO
        // this.router.navigateByUrl();
      } else if (response.error) {
        // TODO: Errorhandling
      }
    });
  }
}
