import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchPage } from './branch.page';

const routes: Routes = [
  {
    path: '',
    component: BranchPage
  },
  {
    path: 'add-branch',
    loadChildren: () => import('./add-branch/add-branch.module').then( m => m.AddBranchPageModule)
  },
  {
    path: 'view-branch',
    loadChildren: () => import('./view-branch/view-branch.module').then( m => m.ViewBranchPageModule)
  },
  {
    path: 'view-clerks',
    loadChildren: () => import('./view-clerks/view-clerks.module').then( m => m.ViewClerksPageModule)
  },
  {
    path: 'view-messages',
    loadChildren: () => import('./view-messages/view-messages.module').then( m => m.ViewMessagesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchPageRoutingModule {}
