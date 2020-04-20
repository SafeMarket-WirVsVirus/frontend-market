import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from './app-header/app-header.component';
import { OpenTimeViewComponent } from './open-time-view/open-time-view.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    AppHeaderComponent,
    OpenTimeViewComponent,
  ],
  exports: [
    AppHeaderComponent,
    OpenTimeViewComponent,
  ]
})
export class ComponentsModule {}
