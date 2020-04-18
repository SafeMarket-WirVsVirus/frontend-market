import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingpageClerkPageRoutingModule } from './loginpage-clerk-routing.module';

import { LoginpageClerkPage } from './loginpage-clerk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LandingpageClerkPageRoutingModule
  ],
  declarations: [LoginpageClerkPage]
})
export class LandingpageClerkPageModule {}
