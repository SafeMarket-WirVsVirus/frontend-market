import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    children: [
      {
        path: 'tab-clerk',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../loginpage-clerk/loginpage-clerk.module').then(m => m.LandingpageClerkPageModule)
          }
        ]
        },
        {
          path: 'tab-owner',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../loginpage-owner/loginpage-owner.module').then(m => m.LandingpageOwnerPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/login/tab-clerk',
          pathMatch: 'full'
        }
    ]
  },
  {
    path: '',
    redirectTo: '/login/tab-clerk',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
