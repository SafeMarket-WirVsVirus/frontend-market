import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMessagesPageRoutingModule } from './view-messages-routing.module';

import { ViewMessagesPage } from './view-messages.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ViewMessagesPage]
})
export class ViewMessagesPageModule {}
