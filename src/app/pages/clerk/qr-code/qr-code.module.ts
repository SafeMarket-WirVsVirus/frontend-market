import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { QrCodePageRoutingModule } from './qr-code-routing.module';

import { QrCodePage } from './qr-code.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodePageRoutingModule,
    ComponentsModule,
    ZXingScannerModule
  ],
  declarations: [
    QrCodePage,
  ]
})
export class QrCodePageModule {}
