import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilizationPage } from './utilization.page';

const routes: Routes = [
  {
    path: '',
    component: UtilizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilizationPageRoutingModule {}
