import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {

  @Input() headerTitle: string;
  @Input() enableBackNavigation: boolean = false;
  @Input() enableLogout: boolean = true;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  logOut(sender) {
    sender.preventDefault();
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
