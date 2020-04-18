import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClerkPage } from './clerk.page';

const routes: Routes = [
  {
    path: '',
    component: ClerkPage,
    children: [
      {
        path: 'tab-qr-code',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
          }
        ]
        },
        {
          path: 'tab-secrets',
          children: [
            {
              path: 'secrets',
              loadChildren: () =>
                import('./secrets/secrets.module').then( m => m.SecretsPageModule)
            }
          ]
        },
        {
          path: 'tab-utilization',
          children: [
            {
              path: 'utilization',
              loadChildren: () =>
                import('./utilization/utilization.module').then( m => m.UtilizationPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/clerk/tab-qr-code',
          pathMatch: 'full'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClerkPageRoutingModule {}
