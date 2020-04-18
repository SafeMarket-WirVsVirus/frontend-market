import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BranchPageRoutingModule } from './branch-routing.module';

import { BranchPage } from './branch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BranchPageRoutingModule
  ],
  declarations: [BranchPage]
})
export class BranchPageModule {}
