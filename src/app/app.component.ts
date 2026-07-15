import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'qr-code-generator';
  text: string = "";
  qrDataUrl: string = "";
  errorMessage: string = "";

  async generate() {
    // リセット
    this.errorMessage = "";
    this.qrDataUrl = "";
    if (!this.text.trim()) {
      this.errorMessage = "テキストを入力してください";
      return;
    }
    try {
      this.qrDataUrl = await QRCode.toDataURL(this.text);
    } catch (error) {
      console.error(error);
      this.errorMessage = "QRコードの生成に失敗しました";
    }
  }

  clear() {
    this.text = "";
    this.qrDataUrl = "";
    this.errorMessage = "";
  }
}
