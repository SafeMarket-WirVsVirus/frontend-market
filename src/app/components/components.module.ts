import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from './app-header/app-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    AppHeaderComponent
  ],
  exports: [
    AppHeaderComponent
  ]
})
export class ComponentsModule {}
