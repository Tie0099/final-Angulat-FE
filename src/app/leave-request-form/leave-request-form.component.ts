import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

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
    MatNativeDateModule
  ],
  templateUrl: './leave-request-form.component.html',
  styleUrl: './leave-request-form.component.scss'
})
export class LeaveRequestFormComponent {
  leaveRequest = {
    fullName: '',  // เพิ่มฟิลด์ใหม่สำหรับชื่อ-นามสกุล
    leaveType: '',
    startDate: null,
    endDate: null,
    reason: ''
  };

  today: Date = new Date();  
  minEndDate!: Date;

  onStartDateChange() {
    if (this.leaveRequest.startDate) {
      this.minEndDate = new Date(this.leaveRequest.startDate);
      this.minEndDate.setDate(this.minEndDate.getDate() + 1);  
    }
  }

  onSubmit() {
    console.log('ส่งคำขอลา:', this.leaveRequest);
  }

  cancel() {
    this.leaveRequest = {
      fullName: '',
      leaveType: '',
      startDate: null,
      endDate: null,
      reason: ''
    };
  }
}
