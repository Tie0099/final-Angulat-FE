import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    RouterOutlet,
    MatTab,
    MatTabGroup,
    CommonModule,
    MatTableModule,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'leave-system';
  remainingLeaveDays = 10;
  pendingLeaveRequests = 2;
  usedLeaveDays = 15;
  displayedColumns: string[] = ['date', 'type', 'status'];
  latestLeaveRequests = [
    { date: '10-15 ก.พ. 2567', type: 'ลาพักร้อน', status: 'รออนุมัติ' },
    { date: '5 ม.ค. 2567', type: 'ลาป่วย', status: 'อนุมัติแล้ว' },
    { date: '20 ม.ค. 2567', type: 'ลากิจ', status: 'ไม่อนุมัติ' } // เพิ่มข้อมูลไม่อนุมัติ
  ];
  
   }