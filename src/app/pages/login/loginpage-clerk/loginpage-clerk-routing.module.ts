import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpageClerkPage } from './loginpage-clerk.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpageClerkPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingpageClerkPageRoutingModule {}
