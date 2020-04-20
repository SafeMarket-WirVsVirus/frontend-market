import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBranchPageRoutingModule } from './add-branch-routing.module';

import { AddBranchPage } from './add-branch.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddBranchPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AddBranchPage]
})
export class AddBranchPageModule {}
