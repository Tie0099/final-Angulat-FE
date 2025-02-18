import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // เพิ่มการ import HttpClientModule
import { AppComponent } from './app.component';
import { LeaveRequestService } from './leave-request.service';  // Service ที่ใช้งาน HttpClient

@NgModule({
  declarations: [
    // components อื่น ๆ
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [LeaveRequestService], 
})
export class AppModule { }
