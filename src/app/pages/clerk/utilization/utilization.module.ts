import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilizationPageRoutingModule } from './utilization-routing.module';

import { UtilizationPage } from './utilization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilizationPageRoutingModule
  ],
  declarations: [UtilizationPage]
})
export class UtilizationPageModule {}
