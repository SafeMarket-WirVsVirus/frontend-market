import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretsPageRoutingModule } from './secrets-routing.module';

import { SecretsPage } from './secrets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretsPageRoutingModule
  ],
  declarations: [SecretsPage]
})
export class SecretsPageModule {}
