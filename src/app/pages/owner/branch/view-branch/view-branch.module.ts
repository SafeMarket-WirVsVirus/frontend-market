import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBranchPageRoutingModule } from './view-branch-routing.module';

import { ViewBranchPage } from './view-branch.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBranchPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ViewBranchPage]
})
export class ViewBranchPageModule {}
