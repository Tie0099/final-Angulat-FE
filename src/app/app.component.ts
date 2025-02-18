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
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LeaveRequestFormComponent } from "./leave-request-form/leave-request-form.component";
import { LeaveHistoryComponent } from "./leave-history/leave-history.component";
import { RouterModule } from '@angular/router';
import { LeaveApprovalComponent } from "./leave-approval/leave-approval.component"; 
@Component({
  selector: 'app-root',
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
    DashboardComponent,
    LeaveRequestFormComponent,
    RouterModule,
    LeaveHistoryComponent,
    LeaveApprovalComponent,
    LeaveApprovalComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leave-system';
  
   }
