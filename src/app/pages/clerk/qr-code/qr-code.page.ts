import { Component, OnInit } from '@angular/core';
import { AppHeaderComponent } from '../../../components/app-header/app-header.component';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  code:string;

  constructor() { }

  ngOnInit() {
  }

  scanSuccessHandler(payload:string) {
    this.code = payload;
  }
}
