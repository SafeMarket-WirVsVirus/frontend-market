import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchPage } from './branch.page';

const routes: Routes = [
  {
    path: '',
    component: BranchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchPageRoutingModule {}
