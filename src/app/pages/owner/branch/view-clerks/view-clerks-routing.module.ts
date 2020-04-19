import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewClerksPage } from './view-clerks.page';

const routes: Routes = [
  {
    path: '',
    component: ViewClerksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewClerksPageRoutingModule {}
