import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage-owner',
  templateUrl: './loginpage-owner.page.html',
  styleUrls: ['./loginpage-owner.page.scss'],
})
export class LoginpageOwnerPage implements OnInit {

  public loginFormGroup = new FormGroup({
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
    this.authService.authenticateOwner(
      this.loginFormGroup.get('username').value,
      this.loginFormGroup.get('password').value,
    ).subscribe(response => {
      if (response.success) {
        this.loginFormGroup.get('username').setValue('');
        this.loginFormGroup.get('password').setValue('');
        this.router.navigateByUrl('/owner');
      } else if (response.error) {
        // TODO: Errorhandling
      }
    });
  }

}
