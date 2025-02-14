import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leave-approval',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.scss'],
})
export class LeaveApprovalComponent {
  leaveRequests = [
    {
      id: 1,
      username: 'สมชาย ใจดี',
      leaveType: 'ลาพักร้อน',
      days: 2,
      startDate: '2025-02-15',
      endDate: '2025-02-16',
      reason: 'พักผ่อนกับครอบครัว',
      comment: '',
    },
    {
      id: 2,
      username: 'หงส์ ศรีไทย',
      leaveType: 'ลาป่วย',
      days: 1,
      startDate: '2025-02-20',
      endDate: '2025-02-20',
      reason: 'ป่วย',
      comment: '',
    },
  ];

  approveLeave(request: any) {
    console.log('Leave approved:', request);
    // Call API to update the status to "approved"
  }

  rejectLeave(request: any) {
    console.log('Leave rejected:', request);
    // Call API to update the status to "rejected"
  }
}
