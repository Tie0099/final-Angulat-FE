import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
export class LeaveApprovalComponent implements OnInit {

  leaveRequests: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchLeaveRequests();
  }

  fetchLeaveRequests() {
    this.http.get<any[]>('http://localhost:8080/api/leave-requests')
      .subscribe(data => {
        this.leaveRequests = data;
      }, error => {
        console.error('Error fetching leave requests', error);
      });
  }

  approveLeave(request: any) {
    this.updateLeaveStatus(request.id, 'APPROVED');
  }

  rejectLeave(request: any) {
    this.updateLeaveStatus(request.id, 'REJECTED');
  }

  updateLeaveStatus(id: number, status: string) {
    this.http.put(`http://localhost:8080/api/leave-requests/${id}?status=${status}`, {})
      .subscribe(response => {
        console.log('Status updated:', response);
        this.fetchLeaveRequests(); // รีโหลดข้อมูลใหม่
      }, error => {
        console.error('Error updating leave status', error);
      });
  }
}