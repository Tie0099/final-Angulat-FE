import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts'; // นำเข้า ApexOptions สำหรับการตั้งค่ากราฟ
import { MatTableDataSource } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts'; // นำเข้า NgApexchartsModule

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // NgApexchartsModule 
  ],
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // เพิ่มการใช้ CUSTOM_ELEMENTS_SCHEMA ที่นี่
})
export class LeaveHistoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'department', 'leaveDays'];
  leaveData = [
    { name: 'สมชาย ใจดี', department: 'IT', leaveDays: 3 },
    { name: 'สมหญิง รักงาน', department: 'HR', leaveDays: 4 },
    { name: 'สมศักดิ์ มากงาน', department: 'Finance', leaveDays: 5 },
    { name: 'สมปอง รักการศึกษา', department: 'Marketing', leaveDays: 2 },
    { name: 'สมหญิง รักสวัสดิการ', department: 'R&D', leaveDays: 6 }
  ];

  dataSource = new MatTableDataSource(this.leaveData);

  selectedLeaveType = 'all';

  public chartOptions: ApexOptions = {
    series: [
      { name: "ลาป่วย", data: [45, 10, 20, 30, 40] },
      { name: "ลาพักร้อน", data: [25, 35, 15, 40, 50] },
      { name: "ลากิจ", data: [30, 40, 35, 25, 30] }
    ],
    chart: { type: "bar", height: 350 },
    plotOptions: { bar: { horizontal: false } },
    dataLabels: { enabled: false },
    xaxis: { categories: ["IT", "HR", "Finance", "Marketing", "R&D"] },
    title: { text: "สถิติการลา" }
  };

  constructor() {}

  ngOnInit(): void {}

  onDateChange(event: any): void {
    console.log("วันที่ที่เลือก:", event.value);
  }

  exportToExcel(): void {
    console.log("ส่งออกข้อมูล Excel");
  }
}
