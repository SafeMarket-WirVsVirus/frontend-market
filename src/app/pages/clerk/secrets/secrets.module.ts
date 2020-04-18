import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretsPageRoutingModule } from './secrets-routing.module';

import { SecretsPage } from './secrets.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SecretsPage]
})
export class SecretsPageModule {}
