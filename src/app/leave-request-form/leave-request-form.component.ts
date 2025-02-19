import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { LeaveRequestService } from '../leave-request.service';
import { LeaveRequest } from '../models/leave-request.model';

@Component({
  selector: 'app-leave-request-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './leave-request-form.component.html',
  styleUrls: ['./leave-request-form.component.scss']
})
export class LeaveRequestFormComponent {
  leaveRequest: LeaveRequest = {
    leaveType: null,
    startDate: null,
    endDate: null,
    reason: ''
  };
  
  successMessage = '';
  errorMessage = '';
  minEndDate: Date = new Date();
  today: Date = new Date();

  constructor(private leaveRequestService: LeaveRequestService) {}

  onStartDateChange(): void {
    if (this.leaveRequest.startDate) {
      this.minEndDate = new Date(this.leaveRequest.startDate);
    }
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    // Clear previous messages
    this.successMessage = '';
    this.errorMessage = '';

    // Validate leave type
    if (!this.leaveRequest.leaveType) {
      this.errorMessage = 'กรุณาเลือกประเภทการลา';
      return;
    }

    // Validate dates
    if (!this.leaveRequest.startDate || !this.leaveRequest.endDate) {
      this.errorMessage = 'กรุณาเลือกวันที่ให้ครบถ้วน';
      return;
    }

    // Validate end date is not before start date
    if (this.leaveRequest.endDate < this.leaveRequest.startDate) {
      this.errorMessage = 'วันที่สิ้นสุดต้องไม่น้อยกว่าวันที่เริ่มต้น';
      return;
    }

    this.leaveRequestService.createLeaveRequest(this.leaveRequest)
      .subscribe({
        next: () => {
          this.successMessage = 'ส่งคำขอลาสำเร็จ';
          this.errorMessage = '';
          
          // Reset form and model
          if (form && typeof form.resetForm === 'function') {
            form.resetForm();
          }
          
          this.leaveRequest = {
            leaveType: null,
            startDate: null,
            endDate: null,
            reason: ''
          };
        },
        error: (error: Error) => {
          console.error('Error submitting leave request:', error);
          this.errorMessage = 'เกิดข้อผิดพลาดในการส่งคำขอลา';
          this.successMessage = '';
        }
      });
  }

  cancel(): void {
    this.leaveRequest = {
      leaveType: null,
      startDate: null,
      endDate: null,
      reason: ''
    };
    this.successMessage = '';
    this.errorMessage = '';
  }
}