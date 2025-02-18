import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { LeaveRequestService } from '../leave-request.service'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leave-request-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    // HttpClient, 
    HttpClientModule,
  ],
  templateUrl: './leave-request-form.component.html',
  styleUrl: './leave-request-form.component.scss'
})
export class LeaveRequestFormComponent {
  
  leaveRequest: any = {
    leaveType: '',
    startDate: null,
    endDate: null,
    reason: ''
  };

  today: Date = new Date();  // สำหรับการตั้งค่าวันที่ปัจจุบัน
  minEndDate: Date = new Date();  // สำหรับการตั้งค่าวันที่สิ้นสุด

  constructor(private leaveRequestService: LeaveRequestService) { }

  onStartDateChange() {
    if (this.leaveRequest.startDate) {
      this.minEndDate = new Date(this.leaveRequest.startDate);
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.leaveRequestService.createLeaveRequest(this.leaveRequest).subscribe(
        (response) => {
          console.log('Leave request submitted successfully:', response);
          // คุณสามารถเพิ่มการแจ้งเตือนหรือการรีเซ็ตฟอร์มได้ที่นี่
        },
        (error) => {
          console.error('Error submitting leave request:', error);
        }
      );
    }
  }

  cancel() {
    // ล้างฟอร์มหรือทำการยกเลิกคำขอลา
    console.log('Leave request form canceled');
  }
}