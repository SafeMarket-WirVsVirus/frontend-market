import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewClerksPageRoutingModule } from './view-clerks-routing.module';

import { ViewClerksPage } from './view-clerks.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewClerksPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ViewClerksPage]
})
export class ViewClerksPageModule {}
