import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerPage } from './owner.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerPage,
    children: [
      {
        path: 'tab-branch',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./branch/branch.module').then(m => m.BranchPageModule)
          }
        ]
        },
        {
          path: 'tab-profile',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('./profile/profile.module').then(m => m.ProfilePageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/owner/tab-branch',
          pathMatch: 'full'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerPageRoutingModule {}
