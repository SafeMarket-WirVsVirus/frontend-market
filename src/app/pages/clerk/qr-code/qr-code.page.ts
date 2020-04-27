import { Component, OnInit, ViewChild } from '@angular/core';
import { AppHeaderComponent } from '../../../components/app-header/app-header.component';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  @ViewChild('scanner', { static: false })
  scanner:ZXingScannerComponent;

  code:string;

  constructor() { }

  ngOnInit() {
  }

  toggleScanner(event) {
    this.scanner.enable = !this.scanner.enabled;
    
    if (this.scanner.enabled === true) {
      this.scanner.updateVideoInputDevices().then(devices => {
        this.scanner.device = devices[0]; 
      });
    }
  }

  scanSuccessHandler(payload:string) {
    this.code = payload;
  }
}
