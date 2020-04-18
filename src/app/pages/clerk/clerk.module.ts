import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClerkPageRoutingModule } from './clerk-routing.module';

import { ClerkPage } from './clerk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClerkPageRoutingModule
  ],
  declarations: [ClerkPage]
})
export class ClerkPageModule {}
