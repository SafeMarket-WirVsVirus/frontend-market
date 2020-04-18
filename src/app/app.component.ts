import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService, UserType } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.verifyAuthToken().subscribe((valid) => {
        if (valid) { // Redirect to landing-page
          switch (this.authService.userType) {
            case UserType.Clerk:
              this.router.navigateByUrl('/landingpage-clerk');
              break;
            case UserType.Owner:
              this.router.navigateByUrl('/landingpage-owner');
              break;
          }

        } else {
          this.router.navigateByUrl('/login');
        }
      });
    });
  }
}
