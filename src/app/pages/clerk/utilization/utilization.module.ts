import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilizationPageRoutingModule } from './utilization-routing.module';

import { UtilizationPage } from './utilization.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilizationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UtilizationPage]
})
export class UtilizationPageModule {}
