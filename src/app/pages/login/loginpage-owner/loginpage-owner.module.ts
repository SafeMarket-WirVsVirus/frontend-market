import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingpageOwnerPageRoutingModule } from './loginpage-owner-routing.module';

import { LoginpageOwnerPage } from './loginpage-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LandingpageOwnerPageRoutingModule
  ],
  declarations: [LoginpageOwnerPage]
})
export class LandingpageOwnerPageModule {}
